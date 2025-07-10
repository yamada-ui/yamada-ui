import type { TSESLint } from "@typescript-eslint/utils"
import type { Linter } from "eslint"
import prettierConfig from "eslint-config-prettier"
import globals from "globals"
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

const ignoresConfig: Linter.Config = {
  name: "eslint/ignores",
  ignores: ["**/node_modules/**"],
}

const languageOptionConfig = languageOptionFactory(true, {
  languageOptions: {
    globals: {
      ...globals.commonjs,
    },
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: "latest",
    },
  },
})

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
  jsxA11yConfig,
  prettierConfig,
)

export default config
