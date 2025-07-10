import type { TSESLint } from "@typescript-eslint/utils"
import prettierConfig from "eslint-config-prettier"
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
} from "../../../.eslint"

const ignoresConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/ignores",
  ignores: ["**/node_modules/**", "**/.next/**"],
}

const languageOptionConfig = languageOptionFactory(true, {
  languageOptions: {
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
  prettierConfig,
)

export default config
