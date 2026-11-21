import {
  createNoRestrictedImportConfig,
  createVitestIsolationConfig,
  defineConfig,
  sharedConfig,
} from "@yamada-ui/workspace/oxlint"

export default defineConfig({
  extends: [
    sharedConfig,
    createNoRestrictedImportConfig(),
    createVitestIsolationConfig(),
  ],
  ignorePatterns: ["dist", "coverage"],
})
