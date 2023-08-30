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
  },
  env: {
    NEXT_PUBLIC_API_URL: 'https://peltroche-strapi-production.up.railway.app/api',
    NEXT_LOCAL_API_URL:'https://peltroche-strapi-production.up.railway.app/api'
  },


}

module.exports = nextConfig
