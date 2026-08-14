import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  turbopack: {
    root: process.cwd(),
  },
  async redirects() {
    return [
      { source: "/contact", destination: "/appoint", permanent: true },
      { source: "/instruct", destination: "/appoint", permanent: true },
    ];
  },
};

export default nextConfig;
