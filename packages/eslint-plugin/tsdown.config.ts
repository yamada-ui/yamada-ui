import type { UserConfig } from "tsdown"
import { defineConfig } from "tsdown"

const sharedConfig: UserConfig = {
  target: "es2022",
  entry: "src/index.ts",
  platform: "node",
  // platform: "node" のとき tsdown は fixedExtension をデフォルトで true にし、
  // ESM 出力を .mjs、型定義を .d.mts にする。本パッケージは "type": "module" 前提なので
  // .js / .d.ts を出して clean-package.config.json の参照（dist/esm/index.js, dist/types/index.d.ts）と
  // 揃える必要がある。明示的に false にして拡張子を打ち消す。
  // @docs: https://tsdown.dev/options/output
  fixedExtension: false,
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
