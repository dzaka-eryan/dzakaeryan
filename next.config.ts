import './src/lib/env'
import { withContentCollections } from '@content-collections/next'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  cacheComponents: true,
  reactCompiler: true,
  redirects() {
    return Promise.resolve([
      {
        source: '/posts',
        destination: '/blog',
        permanent: true,
      },
      {
        source: '/posts/:slug*',
        destination: '/blog/:slug*',
        permanent: true,
      },
    ])
  },
}

export default withContentCollections(nextConfig)
