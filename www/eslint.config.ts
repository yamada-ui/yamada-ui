import type { TSESLint } from "@typescript-eslint/utils"
import type { Linter } from "eslint"
import { fixupPluginRules } from "@eslint/compat"
import nextPlugin from "@next/eslint-plugin-next"
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
  cspellConfig as sharedCspellConfig,
  sharedFiles,
  reactConfig as sharedReactConfig,
  reactHooksConfig as sharedReactHooksConfig,
  typescriptConfig,
} from "../.eslint"

const ignoreConfig: Linter.Config = {
  name: "eslint/ignores",
  ignores: ["**/.next/**", "**/*.mdx", "**/node_modules/**", "pnpm-lock.yaml"],
}

const noConsoleConfig: Linter.Config = {
  name: "eslint/no-console",
  files: ["scripts/**/*.ts", "server.ts", "pages/api/github/observe/**/*.ts"],
  rules: {
    "no-console": "off",
  },
}

const reactConfig: Linter.Config = {
  ...sharedReactConfig,
  files: sharedFiles,
}

const reactHooksConfig: Linter.Config = {
  ...sharedReactHooksConfig,
  files: sharedFiles,
}

const nextConfig: Linter.Config = {
  name: "eslint/next",
  files: sharedFiles,
  plugins: {
    "@next/next": fixupPluginRules(nextPlugin),
  },
  rules: {
    ...nextPlugin.configs.recommended.rules,
    ...nextPlugin.configs["core-web-vitals"].rules,
    "@next/next/no-assign-module-variable": "off",
    "@next/next/no-title-in-document-head": "off",
  },
}

const cspellConfig: Linter.Config = {
  ...sharedCspellConfig,
  ignores: [
    "pages/icons/tags.ts",
    "constant/maintainers.ts",
    "constant/emeriti.ts",
    "constant/contributors.ts",
  ],
}

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.json",
)

const languageOptionsConfig = languageOptionFactory(tsConfigPath)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ignoreConfig,
  languageOptionsConfig,
  baseConfig,
  noConsoleConfig,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  cspellConfig,
  reactConfig,
  reactHooksConfig,
  nextConfig,
  jsxA11yConfig,
  prettierConfig,
)

export default config
