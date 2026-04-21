import { defineConfig } from "oxlint"
import { sharedTestFiles } from "./shared.ts"

export const testingLibraryConfig = defineConfig({
  overrides: [
    {
      files: sharedTestFiles,
      jsPlugins: [import.meta.resolve("eslint-plugin-testing-library")],
      rules: {
        "testing-library/no-await-sync-queries": "error",
        "testing-library/no-debugging-utils": "error",
        "testing-library/no-dom-import": "error",
        "testing-library/no-global-regexp-flag-in-query": "error",
        "testing-library/no-promise-in-fire-event": "error",
        "testing-library/no-wait-for-multiple-assertions": "error",
        "testing-library/prefer-find-by": "error",
        "testing-library/prefer-query-by-disappearance": "error",
      },
    },
  ],
})
