import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import pluginVitest from "@vitest/eslint-plugin"
import type { Linter } from "eslint"
import tseslint from "typescript-eslint"
import {
  baseConfig,
  importConfigArray,
  languageOptionFactory,
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
    "**/.next/**",
    "**/.turbo/**",
    "**/dist/**",
    "**/node_modules/**",
    "**/build/**",
    "**/pnpm-lock.yaml",
    "docs/**",
    "examples/**",
    "coverage/**",
    "storybook-static/**",
    ".storybook/**",
    "packages/cli/bin/**",
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

const testsConfig: Linter.Config = {
  name: "eslint/tests",
  files: [
    "**/packages/**/test/**/*.ts",
    "**/packages/**/test/**/*.tsx",
    "**/packages/**/tests/**/*.ts",
    "**/packages/**/tests/**/*.tsx",
  ],
  rules: {
    "no-restricted-imports": "off",
  },
}

const reactConfig: Linter.Config = {
  ...sharedReactConfig,
  files: sharedFiles,
  ignores: ["packages/cli/**/*.ts"],
}

const reactHooksConfig: Linter.Config = {
  ...sharedReactHooksConfig,
  files: [
    "packages/**/*.ts",
    "packages/**/*.tsx",
    "packages/**/*.d.ts",
    "stories/**/*.ts",
    "stories/**/*.tsx",
    "stories/**/*.d.ts",
  ],
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

export const languageOptionConfig = languageOptionFactory(tsConfigPath)

export default tseslint.config(
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  noConsoleConfig,
  testsConfig,
  typescriptConfig,
  ...importConfigArray,
  reactConfig,
  reactHooksConfig,
  vitestConfig,
  vitestSetupTestsConfig,
  testingLibraryConfig,
)
