import { fixupPluginRules } from "@eslint/compat"
import type { Linter } from "eslint"
import pluginTestingLibrary from "eslint-plugin-testing-library"
import { sharedTestFiles } from "./shared"

export const testingLibraryConfig: Linter.Config = {
  name: "eslint/testing-library",
  files: sharedTestFiles,
  plugins: { "testing-library": fixupPluginRules(pluginTestingLibrary) },
  rules: {
    "testing-library/prefer-query-by-disappearance": "error",
    "testing-library/no-dom-import": "error",
    "testing-library/no-debugging-utils": "error",
    "testing-library/no-global-regexp-flag-in-query": "error",
    "testing-library/no-promise-in-fire-event": "error",
    "testing-library/prefer-find-by": "error",
    "testing-library/no-await-sync-queries": "error",
    "testing-library/no-wait-for-multiple-assertions": "error",
  },
}
