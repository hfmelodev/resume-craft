import NextAuth from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [GitHub, Google],
  pages: {
    newUser: '/',
    signIn: '/auth/login',
  },
  callbacks: {
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
