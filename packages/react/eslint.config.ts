import type { TSESLint } from "@typescript-eslint/utils"
import {
  createImportAliasConfig,
  createLanguageConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
  cspellConfig as sharedCspellConfig,
  sharedFiles,
  restrictedImportsConfigArray as sharedRestrictedImportsConfigArray,
  vitestConfig,
} from "@yamada-ui/workspace/eslint"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"

const restrictedImportsConfigArray: TSESLint.FlatConfig.ConfigArray = [
  ...sharedRestrictedImportsConfigArray,
  {
    name: "eslint/restricted-imports/utils",
    files: sharedFiles.map((file) => `src/!(utils)/${file}`),
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "@yamada-ui/react",
            "@yamada-ui/utils",
            "@yamada-ui/workspace/*",
          ],
        },
      ],
    },
  },
]

const cspellConfig: TSESLint.FlatConfig.Config = {
  ...sharedCspellConfig,
  ignores: [
    ...sharedCspellConfig.ignores,
    "src/components/icon/icons/**",
    "src/providers/i18n-provider/intl/*",
  ],
}

const noConsoleConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/no-console",
  files: ["**/*.stories.tsx"],
  rules: {
    "no-console": "off",
  },
}

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "tsconfig.json",
)

const languageConfig = createLanguageConfig(tsConfigPath)
const importAliasConfig = createImportAliasConfig(tsConfigPath)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  languageConfig,
  ...sharedConfigArray,
  ...restrictedImportsConfigArray,
  importAliasConfig,
  noConsoleConfig,
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  vitestConfig,
)

export default config
