/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com"
      }
    ],
    formats: ["image/avif", "image/webp"],
    qualities: [60, 70, 75, 76, 80, 82, 84, 88, 95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1920],
    imageSizes: [96, 128, 256, 384, 560],
    minimumCacheTTL: 60 * 60 * 24 * 30
  }
};

export default nextConfig;
