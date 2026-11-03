import { eq } from 'drizzle-orm'
import { db } from '@/db/drizzle'
import { users } from '@/db/schema'
import { env } from '@/env'
import { auth } from '@/lib/auth'
import { stripe } from '@/lib/stripe'

export async function POST(req: Request) {
  const { priceId, currentPathname } = await req.json()

  const session = await auth()

  const userId = session?.user?.id

  if (!userId) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const user = await db.select().from(users).where(eq(users.id, userId)).limit(1)

  let customerId = user.length > 0 ? user[0].customerId : null

  if (!customerId) {
    const customer = await stripe.customers.create({
      email: session?.user?.email as string,
      metadata: {
        userId,
      },
    })

    customerId = customer.id

    await db.update(users).set({ customerId }).where(eq(users.id, userId)).execute()
  }

  const checkout = await stripe.checkout.sessions.create({
    allowed_payment_method_types: ['card'],
    customer: customerId,
    mode: 'payment',
    line_items: [
      {
        price: priceId,
        quantity: 1,
      },
    ],
    invoice_creation: {
      enabled: true,
    },
    success_url: `${env.NEXT_PUBLIC_APP_URL}${currentPathname}?checkout=success`,
    cancel_url: `${env.NEXT_PUBLIC_APP_URL}${currentPathname}?checkout=cancel`,
  })

  return new Response(JSON.stringify({ url: checkout.url }), { status: 200 })
}
