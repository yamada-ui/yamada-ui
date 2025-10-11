import type { TSESLint } from "@typescript-eslint/utils"
import nextPlugin from "@next/eslint-plugin-next"
import {
  createLanguageConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
  cspellConfig as sharedCspellConfig,
  sharedFiles,
} from "@yamada-ui/workspace/eslint"
import tseslint from "typescript-eslint"

const noConsoleConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/no-console",
  files: ["scripts/**"],
  rules: {
    "no-console": "off",
  },
}

const cspellConfig: TSESLint.FlatConfig.Config = {
  ...sharedCspellConfig,
  ignores: [...sharedCspellConfig.ignores, "data/**", "contents/changelog/**"],
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

const restrictedImportsConfigArray: TSESLint.FlatConfig.ConfigArray = [
  {
    name: "eslint/restricted-imports/utils",
    files: sharedFiles,
    rules: {
      "no-restricted-imports": ["error", { patterns: ["next/link"] }],
    },
  },
]

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
  ...restrictedImportsConfigArray,
  noConsoleConfig,
  cspellConfig,
  nextConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
)

export default config
