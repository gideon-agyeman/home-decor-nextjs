import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.pexels.com' },
      { protocol: 'https', hostname: 'img.clerk.com' },
      {
        protocol: 'https',
        hostname: 'hyznanzxrqunlpknsbom.supabase.co',
      },
    ],
  },
};

export default nextConfig;
