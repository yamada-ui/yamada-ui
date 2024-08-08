import { fixupPluginRules } from "@eslint/compat"
import pluginTestingLibrary from "eslint-plugin-testing-library"

/** @type {Pick<ESLintConfig, "name" | "files" | "plugins" | "rules">} */
const testingLibraryConfig = {
  name: "@yamada-ui/testing-library/base",
  files: ["**/*.test.ts", "**/*.test.tsx"],
  plugins: {
    "testing-library": fixupPluginRules(pluginTestingLibrary),
  },
  rules: {
    "testing-library/prefer-query-by-disappearance": "error",
    "testing-library/no-dom-import": "error",
    "testing-library/no-debugging-utils": "error",
    "testing-library/no-global-regexp-flag-in-query": "error",
    "testing-library/no-promise-in-fire-event": "error",
    "testing-library/prefer-find-by": "error",
    "testing-library/no-await-sync-queries": "error",
  },
}

export { testingLibraryConfig }
