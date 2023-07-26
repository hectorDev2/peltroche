/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      appDir: true
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  compiler: {
    // Enables the styled-components SWC transform
    styledComponents: true
  }

}

module.exports = nextConfig
