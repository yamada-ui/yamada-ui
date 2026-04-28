import {
  createNoRestrictedImportConfig,
  defineConfig,
  nextConfig,
  reactConfig,
  sharedConfig,
} from "@yamada-ui/workspace/oxlint"

export default defineConfig({
  extends: [
    sharedConfig,
    createNoRestrictedImportConfig(["app"]),
    nextConfig,
    reactConfig,
  ],
  ignorePatterns: [".next", "next-env.d.ts"],
})
