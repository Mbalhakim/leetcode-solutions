import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: '/leetcode-solutions',
  assetPrefix: "/leetcode-solutions/",
  trailingSlash: true,
  reactStrictMode: true,
  output: 'export', //for static export
};

export default nextConfig;