/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "travel-agency-api-mytorino.vercel.app",
        pathname: "/static/images/**",
      },
    ],
  },
};

export default nextConfig;
