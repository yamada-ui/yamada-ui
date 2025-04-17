import type { Linter } from "eslint"
import { fixupPluginRules } from "@eslint/compat"
import { flatConfigs } from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import { sharedFiles } from "./shared"

export const importConfigArray: Linter.Config[] = [
  {
    name: "eslint/import/order",
    files: sharedFiles,
    plugins: {
      import: fixupPluginRules(flatConfigs.recommended.plugins.import),
    },
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
    },
    settings: {
      "import/parsers": {
        "@typescript-eslint/parser": [
          ".js",
          ".cjs",
          ".mjs",
          ".jsx",
          ".ts",
          ".cts",
          ".mts",
          ".tsx",
          ".d.ts",
        ],
      },
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
  {
    name: "eslint/import/unused",
    files: sharedFiles,
    plugins: {
      "unused-imports": unusedImportsPlugin,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },
]
