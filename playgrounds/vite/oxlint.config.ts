import {
  createNoRestrictedImportConfig,
  defineConfig,
  sharedConfig,
} from "@yamada-ui/workspace/oxlint"

export default defineConfig({
  extends: [sharedConfig, createNoRestrictedImportConfig()],
  ignorePatterns: ["vite-env.d.ts"],
})
