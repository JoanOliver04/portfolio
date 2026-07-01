/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  // The site is fully static and needs no image optimization server,
  // which keeps it deployable for free on Vercel (and exportable if desired).
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
