/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/Product-Commercialization',
  assetPrefix: '/Product-Commercialization/',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
};

export default nextConfig;
