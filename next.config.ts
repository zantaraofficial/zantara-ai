import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Ensure that links work correctly on GitHub Pages (if using sub-path)
  // basePath: '/zantara-ai', 
};

export default nextConfig;
