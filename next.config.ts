import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // No basePath needed for custom domain (madesmac.dev)
  // basePath: '/MadesPortofolio',  // Only use this if NOT using custom domain
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
