import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site (no API routes, no server actions) — export to
  // plain HTML/CSS/JS so it can be served from Amplify's static hosting
  // (CDN only, no compute) instead of Amplify's Next.js SSR runtime.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
