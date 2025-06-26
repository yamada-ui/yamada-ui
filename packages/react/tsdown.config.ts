import type { UserConfig } from "tsdown"
import { defineConfig } from "tsdown"

const sharedConfig: UserConfig = {
  target: "es2022",
  entry: [
    "src",
    "!src/components/icon/icons",
    "!src/**/*.json",
    "!src/**/*.test.*",
    "!src/**/*.stories.*",
    // TODO: Remove legacy-components
    "!src/legacy-components",
    "!src/theme/components",
  ],
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
