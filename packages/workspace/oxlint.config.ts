import { defineConfig } from "oxlint"
import { sharedConfig, sharedFiles } from "./src/oxlint/index.ts"

export default defineConfig({
  extends: [sharedConfig],
  overrides: [
    {
      files: sharedFiles,
      plugins: ["import"],
      rules: {
        "import/extensions": "off",
      },
    },
  ],
})
