import { fixupPluginRules } from "@eslint/compat"
import pluginImport from "eslint-plugin-import"
import pluginImportReplace from "eslint-plugin-import-replace"

/** @type {Pick<ESLintConfig, "name" | "files" | "plugins" | "rules" | "settings">[]} */
const importConfigArray = [
  {
    name: "@yamada-ui/import/base",
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
      "**/*.jsx",
      "**/*.ts",
      "**/*.cts",
      "**/*.mts",
      "**/*.tsx",
      "**/*.d.ts",
    ],
    plugins: {
      import: fixupPluginRules(pluginImport),
      "import-replace": pluginImportReplace,
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
          },
        },
      ],
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
        node: {
          extensions: [
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
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    name: "@yamada-ui/import/disabled-in-typescript",
    files: ["**/*.ts", "**/*.cts", "**/*.mts", "**/*.tsx", "**/*.d.ts"],
    rules: {
      "import/named": "off",
    },
  },
  {
    name: "@yamada-ui/import/testing",
    files: ["**/*.test.ts", "**/*.test.tsx"],
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
]

export { importConfigArray }
