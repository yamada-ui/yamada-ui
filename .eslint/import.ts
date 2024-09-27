import { fixupPluginRules } from "@eslint/compat"
import type { Linter } from "eslint"
import { flatConfigs } from "eslint-plugin-import"
import pluginImportReplace from "eslint-plugin-import-replace"
import pluginUnusedImports from "eslint-plugin-unused-imports"
import { sharedFiles, sharedTestFiles } from "./shared"

export const importConfigArray: Linter.Config[] = [
  {
    name: "eslint/import/order",
    files: sharedFiles,
    plugins: {
      import: fixupPluginRules(flatConfigs.recommended.plugins.import),
    },
    rules: {
      ...flatConfigs.recommended.rules,
      "import/order": ["error", { alphabetize: { order: "asc" } }],
      "import/named": "off",
      "import/no-named-as-default-member": "off",
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
        typescript: true,
        node: true,
      },
    },
  },
  {
    name: "eslint/import/replace",
    files: sharedTestFiles,
    plugins: {
      "import-replace": pluginImportReplace,
    },
    rules: {
      "import-replace/import-replace": [
        "error",
        [
          {
            from: "@testing-library/react",
            to: "@yamada-ui/test",
          },
        ],
      ],
    },
  },
  {
    plugins: {
      "unused-imports": pluginUnusedImports,
    },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },
]
