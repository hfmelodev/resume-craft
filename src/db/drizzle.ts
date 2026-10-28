import { drizzle } from 'drizzle-orm/postgres-js'
import postgres from 'postgres'

import { env } from '@/env'

import * as schema from './schema'

// O pooler do Supabase em modo Transaction (porta 6543) não suporta prepared statements
const client = postgres(env.DATABASE_URL, { prepare: false })

const db = drizzle({ client, schema })

export { db }
