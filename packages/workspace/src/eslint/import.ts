import type { TSESLint } from "@typescript-eslint/utils"
import { fixupPluginRules } from "@eslint/compat"
import importAliasPlugin from "@limegrass/eslint-plugin-import-alias"
import { flatConfigs } from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import { sharedFiles } from "./shared"

export const importConfigArray: TSESLint.FlatConfig.ConfigArray = [
  {
    name: "eslint/import/order",
    files: sharedFiles,
    plugins: {
      import: fixupPluginRules(flatConfigs.recommended.plugins?.import ?? {}),
    },
    rules: {
      "import/consistent-type-specifier-style": ["error", "prefer-top-level"],
      "import/no-duplicates": "error",
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

export const createImportAliasConfig = (
  aliasConfigPath: string,
): TSESLint.FlatConfig.Config => ({
  name: "eslint/import/alias",
  files: sharedFiles,
  plugins: { "import-alias": importAliasPlugin },
  rules: {
    "import-alias/import-alias": [
      "error",
      { aliasConfigPath, relativeImportOverrides: [{ depth: 0, path: "." }] },
    ],
  },
})

export const restrictedImportsConfigArray: TSESLint.FlatConfig.ConfigArray = [
  {
    name: "eslint/restricted-imports/react",
    files: sharedFiles,
    rules: {
      "no-restricted-imports": ["error", "@yamada-ui/react"],
    },
  } satisfies TSESLint.FlatConfig.Config,
  {
    name: "eslint/restricted-imports/workspace",
    files: sharedFiles.map((file) => `src/${file}`),
    rules: {
      "no-restricted-imports": [
        "error",
        { patterns: ["@yamada-ui/react", "@yamada-ui/workspace/*"] },
      ],
    },
  } satisfies TSESLint.FlatConfig.Config,
]
