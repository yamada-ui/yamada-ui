import {
  createNoRestrictedImportConfig,
  defineConfig,
  nextConfig,
  reactConfig,
  sharedConfig,
  sharedFiles,
} from "@yamada-ui/workspace/oxlint"

export default defineConfig({
  extends: [
    sharedConfig,
    createNoRestrictedImportConfig([sharedFiles.map((file) => `app/${file}`)]),
    nextConfig,
    reactConfig,
  ],
  ignorePatterns: [".next", "next-env.d.ts"],
})
