/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: ['./src/styles'],
  },
  images: {
    domains: ['static.wikia.nocookie.net'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'static.wikia.nocookie.net',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig 