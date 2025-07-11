import type { TSESLint } from "@typescript-eslint/utils"
import type { Linter } from "eslint"
import pluginVitest from "@vitest/eslint-plugin"
import prettierConfig from "eslint-config-prettier"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"
import {
  baseConfig,
  cspellConfig,
  importConfigArray,
  languageOptionFactory,
  perfectionistConfig,
  reactConfig as sharedReactConfig,
  reactHooksConfig as sharedReactHooksConfig,
  testingLibraryConfig,
  typescriptConfig,
  vitestConfig,
} from "./.eslint"

const sharedFiles = [
  "packages/**/*.ts",
  "packages/**/*.tsx",
  "packages/**/*.d.ts",
  "stories/**/*.ts",
  "stories/**/*.tsx",
  "stories/**/*.d.ts",
]

const ignoresConfig: Linter.Config = {
  name: "eslint/ignores",
  ignores: [
    "!.storybook/**",
    "**/.next/**",
    "**/.turbo/**",
    "**/dist/**",
    "**/node_modules/**",
    "**/build/**",
    "**/bin/**",
    "**/pnpm-lock.yaml",
    "www/**",
    "examples/**",
    "coverage/**",
    "storybook-static/**",
  ],
}

const noConsoleConfig: Linter.Config = {
  name: "eslint/no-console",
  files: [
    "packages/cli/**/*.ts",
    "scripts/**/*.ts",
    "stories/**/*.tsx",
    "stories/**/*.ts",
  ],
  rules: {
    "no-console": "off",
  },
}

const storybookConfig: Linter.Config = {
  name: "eslint/storybook",
  files: ["stories/**/*.ts", "stories/**/*.tsx", "stories/**/*.d.ts"],
  rules: {
    "react-hooks/rules-of-hooks": "off",
  },
}

const deprecatedConfig: Linter.Config = {
  name: "eslint/deprecated",
  files: [
    "packages/**/tests/**/*.js",
    "packages/**/tests/**/*.cjs",
    "packages/**/tests/**/*.mjs",
    "packages/**/tests/**/*.jsx",
    "packages/**/tests/**/*.ts",
    "packages/**/tests/**/*.cts",
    "packages/**/tests/**/*.mts",
    "packages/**/tests/**/*.tsx",
    "packages/**/tests/**/*.d.ts",
    "stories/**/*.ts",
    "stories/**/*.tsx",
    "stories/**/*.d.ts",
  ],
  rules: {
    "@typescript-eslint/no-deprecated": "warn",
  },
}

const restrictedImportsConfig: Linter.Config = {
  name: "eslint/restricted-imports",
  files: [
    "packages/**/*.js",
    "packages/**/*.cjs",
    "packages/**/*.mjs",
    "packages/**/*.jsx",
    "packages/**/*.ts",
    "packages/**/*.cts",
    "packages/**/*.mts",
    "packages/**/*.tsx",
    "packages/**/*.d.ts",
  ],
  rules: {
    "no-restricted-imports": ["error", "@yamada-ui/react"],
  },
}

const reactConfig: Linter.Config = {
  ...sharedReactConfig,
  files: sharedFiles,
  ignores: ["packages/cli/**/*.ts"],
}

const reactHooksConfig: Linter.Config = {
  ...sharedReactHooksConfig,
  files: sharedFiles,
  ignores: ["packages/cli/**/*.ts"],
}

const vitestSetupTestsConfig: Linter.Config = {
  name: "eslint/vitest/setup-tests",
  files: ["scripts/setup-test.ts"],
  plugins: {
    vitest: pluginVitest,
  },
  rules: {
    "vitest/prefer-spy-on": "off",
  },
}

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.json",
)

const languageOptionConfig = languageOptionFactory(tsConfigPath)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  noConsoleConfig,
  deprecatedConfig,
  restrictedImportsConfig,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  cspellConfig,
  reactConfig,
  reactHooksConfig,
  storybookConfig,
  vitestConfig,
  vitestSetupTestsConfig,
  testingLibraryConfig,
  prettierConfig,
)

export default config
