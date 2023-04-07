/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // image optimization
  images: {
    dangerouslyAllowSVG: true,
    domains: ["spline.design", "api.dicebear.com", "www.ultraupdates.com"],
  },
};

module.exports = nextConfig;
