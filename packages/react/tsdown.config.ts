import type { UserConfig } from "tsdown"
import { defineConfig } from "tsdown"

const sharedConfig: UserConfig = {
  target: "es2022",
  entry: ["src/index.ts"],
  platform: "browser",
  sourcemap: true,
  unbundle: true,
}

export default [
  defineConfig({
    ...sharedConfig,
    format: "cjs",
    outDir: "dist/cjs",
  }),
  defineConfig({
    ...sharedConfig,
    format: "esm",
    outDir: "dist/esm",
  }),
  defineConfig({
    ...sharedConfig,
    dts: { emitDtsOnly: true },
    outDir: "dist/types",
  }),
]
