import type { ConfigWithExtendsArray } from "@eslint/config-helpers"
import importAliasPlugin from "@limegrass/eslint-plugin-import-alias"
import importPlugin from "eslint-plugin-import"
import unusedImportsPlugin from "eslint-plugin-unused-imports"
import { sharedFiles } from "./shared"

export const importConfigArray: ConfigWithExtendsArray = [
  {
    name: "import",
    extends: [importPlugin.flatConfigs.recommended],
    files: sharedFiles,
    rules: {
      "import/no-named-as-default": "off",
      "import/no-unresolved": "off",
    },
    settings: {
      "import/resolver": {
        node: true,
        typescript: true,
      },
    },
  },
  {
    name: "import/unused",
    files: sharedFiles,
    plugins: { "unused-imports": unusedImportsPlugin },
    rules: {
      "unused-imports/no-unused-imports": "error",
    },
  },
  {
    name: "import/alias",
    files: sharedFiles,
    plugins: { "import-alias": importAliasPlugin },
    rules: {
      "import-alias/import-alias": [
        "error",
        { relativeImportOverrides: [{ depth: 0, path: "." }] },
      ],
    },
  },
]

export const restrictedImportConfigArray: ConfigWithExtendsArray = [
  {
    name: "import/react",
    files: sharedFiles,
    rules: {
      "no-restricted-imports": ["error", "@yamada-ui/react"],
    },
  },
  {
    name: "import/workspace",
    files: sharedFiles.map((file) => `src/${file}`),
    rules: {
      "no-restricted-imports": [
        "error",
        { patterns: ["@yamada-ui/react", "@yamada-ui/workspace/*"] },
      ],
    },
  },
]
