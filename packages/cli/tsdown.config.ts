import { defineConfig } from "tsdown"

export default defineConfig({
  target: "es2022",
  banner: {
    js: "#!/usr/bin/env node",
  },
  entry: "src/index.ts",
  format: "esm",
  shims: true,
})
