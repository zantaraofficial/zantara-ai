import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Memberitahu Next.js bahwa website ada di folder /zantara-ai/
  basePath: '/zantara-ai',
  assetPrefix: '/zantara-ai',
};

export default nextConfig;
