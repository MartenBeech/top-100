import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  async redirects() {
    return [
      {
        source: "/",
        destination: "/player",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
