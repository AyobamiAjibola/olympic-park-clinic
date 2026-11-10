import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    inlineCss: true,
    optimizePackageImports: ["radix-ui"],
  },
  async redirects() {
    return [{ source: "/meet-our-doctors", destination: "/doctors", permanent: true }];
  },
};

export default nextConfig;
