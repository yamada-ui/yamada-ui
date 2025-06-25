import type { TSESLint } from "@typescript-eslint/utils"
import prettierConfig from "eslint-config-prettier"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"
import {
  baseConfig,
  importConfigArray,
  jsxA11yConfig,
  languageOptionFactory,
  perfectionistConfig,
  reactConfig,
  reactHooksConfig,
  typescriptConfig,
} from "../../.eslint"

const ignoresConfig = {
  name: "eslint/ignores",
  ignores: ["**/dist/**", "**/node_modules/**"],
}

const tsConfigAppPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.app.json",
)

const tsConfigNodePath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.node.json",
)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ignoresConfig,
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
  baseConfig,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
  prettierConfig,
)

export default config
