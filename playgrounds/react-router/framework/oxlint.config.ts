import { defineConfig, sharedConfig } from "@yamada-ui/workspace/oxlint"

export default defineConfig({
  extends: [sharedConfig],
  ignorePatterns: [".react-router"],
})
