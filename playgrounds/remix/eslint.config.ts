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
import tseslint from "typescript-eslint"

const restrictedImportsConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/restricted-imports",
  files: sharedFiles,
  rules: {
    "no-restricted-imports": "off",
  },
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
  languageOptionConfig,
  ...sharedConfigArray,
  cspellConfig,
  restrictedImportsConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
)

export default config
