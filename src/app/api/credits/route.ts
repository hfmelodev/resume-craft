import { getUserCredits } from '@/db/dals'

export async function GET() {
  const credits = await getUserCredits()

  return new Response(JSON.stringify({ credits }), { status: 200 })
}
