import { defineConfig } from 'drizzle-kit'

import { env } from './src/env'

export default defineConfig({
  dialect: 'postgresql',
  schema: './src/db/schema.ts',
  out: './src/db/migrations',
  // drizzle-kit trava na introspecção pelo pooler em modo Transaction (6543); usa o modo Session (5432)
  dbCredentials: {
    url: env.DIRECT_URL,
  },
})
