import type { TSESLint } from "@typescript-eslint/utils"
import testingLibraryPlugin from "eslint-plugin-testing-library"
import { sharedTestFiles } from "./shared"

export const testingLibraryConfig = {
  name: "eslint/testing-library",
  files: sharedTestFiles,
  plugins: { "testing-library": testingLibraryPlugin },
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
} satisfies TSESLint.FlatConfig.Config
