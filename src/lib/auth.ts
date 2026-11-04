import { DrizzleAdapter } from '@auth/drizzle-adapter'
import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

import { db } from '@/db/drizzle'
import { accounts, authenticators, sessions, users, verificationTokens } from '@/db/schema'

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: DrizzleAdapter(db, {
    usersTable: users,
    accountsTable: accounts,
    sessionsTable: sessions,
    verificationTokensTable: verificationTokens,
    authenticatorsTable: authenticators,
  }),
  // Sessão no cookie (JWT) para não consultar o banco a cada requisição; o adapter segue salvando user/account no login
  session: { strategy: 'jwt' },
  // Só o Google vincula por e-mail: ele garante e-mail verificado; o GitHub pode entregar e-mail primário não verificado (risco de sequestro de conta)
  providers: [GitHub, Google({ allowDangerousEmailAccountLinking: true })],
  pages: {
    signIn: '/auth/login',
  },
  callbacks: {
    session: ({ session, token }) => {
      if (token.sub) session.user.id = token.sub

      return session
    },
    authorized: async ({ auth, request }) => {
      const isDashboardRoute = request.nextUrl.pathname.startsWith('/dashboard')
      const isAuthRoute = request.nextUrl.pathname.startsWith('/auth')

      if (isAuthRoute && auth) {
        return Response.redirect(new URL('/dashboard/resumes', request.nextUrl))
      }

      if (isDashboardRoute) return !!auth

      return true
    },
  },
})
