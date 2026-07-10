import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static site: `next build` emits to out/ for Cloudflare Pages.
  output: "export",
  typescript: {
    // TypeScript 7 (native) is our source of truth for type-checking, run via
    // `npm run typecheck`. Next.js loads TS through the *classic JS compiler API*,
    // which TS 7.0 doesn't ship yet (it lands in 7.1), so we let Next skip its own
    // check rather than run the slower TS 6 shim on every build.
    // TODO: remove this once TS 7.1 ships the JS API and Next can use tsc-native directly.
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
