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

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.json",
)

const tsConfigNodePath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.node.json",
)

export default tseslint.config(
  ignoresConfig,
  languageOptionFactory(tsConfigPath, {
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
    files: ["eslint.config.mjs", "vite.config.ts"],
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
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
