import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Pin the workspace root so Turbopack ignores unrelated lockfiles further up
  // the filesystem — this project is standalone, not part of a monorepo.
  turbopack: { root: path.resolve(".") },
};

export default nextConfig;
