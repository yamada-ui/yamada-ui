import type { TSESLint } from "@typescript-eslint/utils"
import nextPlugin from "@next/eslint-plugin-next"
import prettierConfig from "eslint-config-prettier"
import tseslint from "typescript-eslint"
import {
  baseConfig,
  cspellConfig,
  importConfigArray,
  languageOptionFactory,
  perfectionistConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig as sharedJsxA11yConfig,
  typescriptConfig,
} from "../.eslint"

const ignoresConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/ignores",
  ignores: ["**/node_modules/**", "**/.next/**", "**/.velite/**"],
}

const noConsoleConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/no-console",
  files: ["scripts/**/*.ts"],
  rules: {
    "no-console": "off",
  },
}

const jsxA11yConfig: TSESLint.FlatConfig.Config = {
  ...sharedJsxA11yConfig,
  rules: {
    ...sharedJsxA11yConfig.rules,
    "jsx-a11y/no-autofocus": "off",
  },
}

const nextConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/next",
  plugins: {
    "@next/next": nextPlugin,
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
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
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  noConsoleConfig,
  nextConfig,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  cspellConfig,
  reactConfig,
  reactHooksConfig,
  jsxA11yConfig,
  prettierConfig,
)

export default config
