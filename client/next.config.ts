import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Rewrites and redirects are not supported in static export
};

export default nextConfig;
