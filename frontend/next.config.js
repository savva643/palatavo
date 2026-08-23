/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost', 'your-strapi-domain'],
  },
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:1337/api';
    return [
      {
        source: '/api/:path*',
        destination: apiUrl + '/:path*',
      },
    ];
  },
};

module.exports = nextConfig;
