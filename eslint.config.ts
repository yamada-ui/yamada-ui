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
    "docs/**",
    "examples/**",
    "coverage/**",
    "storybook-static/**",
    // TODO: Remove legacy-components
    "**/legacy-components/**",
  ],
}

const noConsoleConfig: Linter.Config = {
  name: "eslint/no-console",
  files: [
    "packages/cli/**/*.ts",
    "scripts/**/*.ts",
    "packages/**/*.stories.tsx",
    "packages/**/*.stories.ts",
  ],
  rules: {
    "no-console": "off",
  },
}

const restrictedImportsConfigArray: Linter.Config[] = [
  {
    name: "eslint/restricted-imports/react",
    files: [
      "**/packages/(react|utils)/**/*.js",
      "**/packages/(react|utils)/**/*.cjs",
      "**/packages/(react|utils)/**/*.mjs",
      "**/packages/(react|utils)/**/*.jsx",
      "**/packages/(react|utils)/**/*.ts",
      "**/packages/(react|utils)/**/*.cts",
      "**/packages/(react|utils)/**/*.mts",
      "**/packages/(react|utils)/**/*.tsx",
      "**/packages/(react|utils)/**/*.d.ts",
    ],
    rules: {
      "no-restricted-imports": ["error", "@yamada-ui/react"],
    },
  },
  {
    name: "eslint/restricted-imports/utils",
    files: [
      "**/packages/react/src/!(utils)/**/*.js",
      "**/packages/react/src/!(utils)/**/*.cjs",
      "**/packages/react/src/!(utils)/**/*.mjs",
      "**/packages/react/src/!(utils)/**/*.jsx",
      "**/packages/react/src/!(utils)/**/*.ts",
      "**/packages/react/src/!(utils)/**/*.cts",
      "**/packages/react/src/!(utils)/**/*.mts",
      "**/packages/react/src/!(utils)/**/*.tsx",
      "**/packages/react/src/!(utils)/**/*.d.ts",
    ],
    rules: {
      "no-restricted-imports": ["error", "@yamada-ui/utils"],
    },
  },
]

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
  ...restrictedImportsConfigArray,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  cspellConfig,
  reactConfig,
  reactHooksConfig,
  vitestConfig,
  vitestSetupTestsConfig,
  testingLibraryConfig,
  prettierConfig,
)

export default config
