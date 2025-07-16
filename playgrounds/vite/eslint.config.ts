import type { TSESLint } from "@typescript-eslint/utils"
import {
  createLanguageConfig,
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"

const tsConfigAppPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "tsconfig.app.json",
)

const tsConfigNodePath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "tsconfig.node.json",
)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  createLanguageConfig(tsConfigAppPath, {
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
  createLanguageConfig(tsConfigNodePath, {
    files: ["eslint.config.ts", "vite.config.ts"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: "latest",
      },
    },
  }),
  ...sharedConfigArray,
  cspellConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
)

export default config
