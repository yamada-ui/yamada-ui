import {
  createNoRestrictedImportConfig,
  defineConfig,
  noConsoleConfig,
  sharedConfig,
} from "@yamada-ui/workspace/oxlint"

export default defineConfig({
  extends: [sharedConfig, noConsoleConfig, createNoRestrictedImportConfig()],
  ignorePatterns: ["bin", "dist", "coverage"],
})
