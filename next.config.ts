import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === 'production';

const nextConfig: NextConfig = {
  // Enable static export for GitHub Pages
  output: 'export',
  
  // Set base path for GitHub Pages (change 'MadesPortofolio' to your repo name)
  basePath: isProd ? '/MadesPortofolio' : '',
  
  // Asset prefix for static files
  assetPrefix: isProd ? '/MadesPortofolio/' : '',
  
  // Disable image optimization for static export
  images: {
    unoptimized: true,
  },
  
  // Trailing slash for GitHub Pages compatibility
  trailingSlash: true,
};

export default nextConfig;
