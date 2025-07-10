import { defineConfig } from "tsdown"

export default defineConfig({
  target: "es2022",
  entry: "src/index.ts",
  format: "esm",
  shims: true,
})
