import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
        pathname: '/uploads/**',
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: '/uploads/:path*',
        destination: 'http://localhost:5000/uploads/:path*',
      },
      {
        source: '/api/:path*',
        destination: 'http://localhost:5000/api/:path*',
      },
    ];
  },
  async redirects() {
    return [
      {
        source: '/admin',
        destination: 'http://localhost:5000/admin',
        permanent: false,
      },
      {
        source: '/admin/:path*',
        destination: 'http://localhost:5000/admin/:path*',
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
