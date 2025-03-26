const esbuild = require("esbuild");

esbuild
  .build({
    entryPoints: ["src/index.ts"],
    outfile: "dist/server.js",
    bundle: true,
    platform: "node",
    sourcemap: true,
    minify: false,
    target: "node16",
    watch: process.argv.includes("--watch"),
  })
  .catch(() => process.exit(1));
