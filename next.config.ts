import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // Outputs a Single-Page Application (SPA)
  distDir: "build", // Changes the build output directory to `build`
};

module.exports = {
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
