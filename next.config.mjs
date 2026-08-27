/** @type {import('next').NextConfig} */
const nextConfig = {
  // Fully static site (no API routes, no server actions) — export to
  // plain HTML/CSS/JS so it can be served from Amplify's static hosting
  // (CDN only, no compute) instead of Amplify's Next.js SSR runtime.
  //
  // Kept as .mjs rather than .ts: Amplify's Next.js build detection reads
  // this file as plain text to decide static vs SSR hosting, and does not
  // parse next.config.ts.
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
