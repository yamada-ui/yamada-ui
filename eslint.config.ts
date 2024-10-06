import type { Linter } from "eslint"
import pluginVitest from "@vitest/eslint-plugin"
import prettierConfig from "eslint-config-prettier"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"
import {
  baseConfig,
  importConfigArray,
  languageOptionFactory,
  perfectionistConfig,
  cspellConfig as sharedCspellConfig,
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

const storybookConfig: Linter.Config = {
  name: "eslint/storybook",
  files: ["stories/**/*.ts", "stories/**/*.tsx", "stories/**/*.d.ts"],
  rules: {
    "react-hooks/rules-of-hooks": "off",
  },
}

const restrictedImportsConfig: Linter.Config = {
  name: "eslint/restricted-imports",
  files: [
    "**/packages/**/*.js",
    "**/packages/**/*.cjs",
    "**/packages/**/*.mjs",
    "**/packages/**/*.jsx",
    "**/packages/**/*.ts",
    "**/packages/**/*.cts",
    "**/packages/**/*.mts",
    "**/packages/**/*.tsx",
    "**/packages/**/*.d.ts",
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

const cspellConfig: Linter.Config = {
  ...sharedCspellConfig,
  ignores: ["packages/components/lucide/src/icons/**"],
}

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.json",
)

const languageOptionConfig = languageOptionFactory(tsConfigPath)

export default tseslint.config(
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  noConsoleConfig,
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
