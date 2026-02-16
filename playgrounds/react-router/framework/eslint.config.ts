import type { TSESLint } from "@typescript-eslint/utils"
import {
  createLanguageConfig,
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"
import tseslint from "typescript-eslint"

const ignoresConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/ignores",
  ignores: [".react-router/**"],
}

const languageConfig = createLanguageConfig(true, {
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
  languageConfig,
  ...sharedConfigArray,
  ignoresConfig,
  cspellConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
)

export default config
