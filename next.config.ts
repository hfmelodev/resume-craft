import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    agentFeedback: true,
  },
  cacheComponents: true,
  partialPrefetching: true,
  reactCompiler: true,
  turbopack: {
    rules: {
      '*.css': {
        loaders: ['@tailwindcss/turbopack'],
        as: '*.css',
      },
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  // Garante que os binários comprimidos do Chromium entrem no bundle da função na Vercel
  outputFileTracingIncludes: {
    '/api/resume/download': ['./node_modules/@sparticuz/chromium/bin/**/*'],
  },
  images: {
    qualities: [100, 25, 50, 75],
  },
}

export default nextConfig
