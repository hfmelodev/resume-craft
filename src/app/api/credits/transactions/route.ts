import { eq } from 'drizzle-orm'
import { db } from '@/db/drizzle'
import { users } from '@/db/schema'
import { auth } from '@/lib/auth'
import { stripe } from '@/lib/stripe'

export async function POST(req: Request) {
  const { currentPathname } = await req.json()

  const session = await auth()

  const userId = session?.user?.id

  if (!userId) {
    return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 })
  }

  const user = await db.select().from(users).where(eq(users.id, userId)).limit(1)

  if (!user[0].customerId) {
    return new Response(JSON.stringify({ error: 'Você ainda não possui transações' }), { status: 400 })
  }

  const portal = await stripe.billingPortal.sessions.create({
    customer: user[0].customerId,
    return_url: `${process.env.NEXT_PUBLIC_APP_URL}${currentPathname}`,
  })

  return new Response(JSON.stringify({ url: portal.url }), { status: 200 })
}
