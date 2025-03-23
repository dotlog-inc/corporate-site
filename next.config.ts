/* import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here 
};

export default nextConfig; */

 import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['localhost', 'localhost:1337'], // localhost と Strapi のポートを追加
  },
};

export default nextConfig;
