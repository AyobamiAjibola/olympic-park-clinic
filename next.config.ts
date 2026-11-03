import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [{ source: "/meet-our-doctors", destination: "/doctors", permanent: true }];
  },
};

export default nextConfig;
