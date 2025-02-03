import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  
  basePath: '/leetcode-solutions', 
  trailingSlash: true, // Ensures that URLs end with a slash, required by GitHub Pages
  reactStrictMode: true, // generally recommended for better debugging
};
export default nextConfig;
