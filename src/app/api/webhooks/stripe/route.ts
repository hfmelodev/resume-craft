import { eq, sql } from 'drizzle-orm'
import type Stripe from 'stripe'
import { db } from '@/db/drizzle'
import { processedCheckoutSessions, users } from '@/db/schema'
import { env } from '@/env'
import { stripe } from '@/lib/stripe'

export async function POST(req: Request) {
  // a verificação exige o corpo cru, sem parse de JSON
  const body = await req.text()
  const signature = req.headers.get('stripe-signature')

  if (!signature) {
    return new Response(JSON.stringify({ error: 'Missing stripe-signature header' }), { status: 400 })
  }

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, env.STRIPE_WEBHOOK_SECRET)
  } catch (error) {
    console.error('❌ Falha na verificação da assinatura do webhook:', error)

    return new Response(JSON.stringify({ error: 'Invalid signature' }), { status: 400 })
  }

  // pagamentos assíncronos (boleto, Pix...) chegam "unpaid" no completed e só são confirmados no async_payment_succeeded
  if (event.type === 'checkout.session.completed' || event.type === 'checkout.session.async_payment_succeeded') {
    const session = event.data.object

    if (session.payment_status === 'unpaid') {
      return new Response(JSON.stringify({ received: true }), { status: 200 })
    }

    const customerId = typeof session.customer === 'string' ? session.customer : session.customer?.id

    if (!customerId) {
      return new Response(JSON.stringify({ error: 'Session without customer' }), { status: 400 })
    }

    const lineItems = await stripe.checkout.sessions.listLineItems(session.id)

    // mesma regra do BuyCreditsDialog: créditos vêm da metadata "amount" do preço
    const credits = lineItems.data.reduce(
      (total, item) => total + Number(item.price?.metadata.amount ?? 0) * (item.quantity ?? 1),
      0
    )

    if (!Number.isFinite(credits) || credits <= 0) {
      return new Response(JSON.stringify({ error: 'Invalid credits amount' }), { status: 400 })
    }

    // registro e crédito na mesma transação: se o update falhar, a sessão não fica marcada e o reenvio do Stripe credita
    await db.transaction(async tx => {
      const inserted = await tx
        .insert(processedCheckoutSessions)
        .values({ sessionId: session.id })
        .onConflictDoNothing()
        .returning({ sessionId: processedCheckoutSessions.sessionId })

      if (inserted.length === 0) return

      await tx
        .update(users)
        .set({ credits: sql`${users.credits} + ${credits}` })
        .where(eq(users.customerId, customerId))
    })
  }

  return new Response(JSON.stringify({ received: true }), { status: 200 })
}
