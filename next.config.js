/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  rewrites: async () => [
    {
      source: '/feed',
      destination: '/api/feed',
    },
  ],
}

module.exports = nextConfig
