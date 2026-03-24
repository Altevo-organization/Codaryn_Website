/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Optimizations for production
  poweredByHeader: false,
  reactStrictMode: true,
  // Enable compression
  compress: true,
};

module.exports = nextConfig;
