const withPWA = require('next-pwa');

/** @type {import('next').NextConfig} */
const nextConfig = withPWA({
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    register: true,
    skipWaiting: true,
    disable: process.env.NODE_ENV === 'development',
  },
  async redirects() {
    return [
      {
        source: '/events',
        destination: '/events/timer',
        permanent: true,
      },
      {
        source: '/',
        destination: '/events/timer',
        permanent: true,
      },
    ]
  },
});

module.exports = nextConfig
