import { env } from '@/env'
import { stripe } from '@/lib/stripe'

export async function GET() {
  const prices = await stripe.prices.list({
    product: env.STRIPE_CREDIT_PRODUCT_ID,
    active: true,
  })

  return new Response(JSON.stringify({ prices: prices.data }), { status: 200 })
}
