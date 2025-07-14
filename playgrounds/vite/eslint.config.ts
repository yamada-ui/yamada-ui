import type { TSESLint } from "@typescript-eslint/utils"
import {
  cspellConfig,
  jsxA11yConfig,
  languageOptionFactory,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
  sharedFiles,
} from "@yamada-ui/workspace/eslint"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"

const restrictedImportsConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/restricted-imports",
  files: sharedFiles,
  rules: {
    "no-restricted-imports": "off",
  },
}

const tsConfigAppPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "tsconfig.app.json",
)

const tsConfigNodePath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "tsconfig.node.json",
)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  languageOptionFactory(tsConfigAppPath, {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: "latest",
      },
    },
  }),
  languageOptionFactory(tsConfigNodePath, {
    files: ["eslint.config.ts", "vite.config.ts"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
  }),
  ...sharedConfigArray,
  cspellConfig,
  restrictedImportsConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
)

export default config
