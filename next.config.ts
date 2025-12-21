import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    qualities: [75, 100],
  },
  reactCompiler: true,
  cacheComponents: true,
}

export default nextConfig
