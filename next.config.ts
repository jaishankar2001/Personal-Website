import type { NextConfig } from "next";

// Must match EXACT GitHub repo name
const repoName = "Personal-Website";

const basePath =
  process.env.NODE_ENV === "production" ? `/${repoName}` : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
