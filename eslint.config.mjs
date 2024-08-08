import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import pluginVitest from "eslint-plugin-vitest"
import { config as tseslintConfigs } from "typescript-eslint"
import { baseConfig } from "./eslint/base.mjs"
import { importConfigArray } from "./eslint/import.mjs"
import { languageOptionFactory } from "./eslint/language-options.mjs"
import { prettierConfig } from "./eslint/prettier.mjs"
import { reactHooksConfig } from "./eslint/react-hooks.mjs"
import { reactConfig } from "./eslint/react.mjs"
import { testingLibraryConfig } from "./eslint/testing-library.mjs"
import { typescriptConfig } from "./eslint/typescript.mjs"
import { vitestConfig } from "./eslint/vitest.mjs"

/** @typedef {import("typescript-eslint").ConfigWithExtends} ESLintConfig */

/** @type {Pick<ESLintConfig, "name" | "ignores">} */
const ignoresConfig = {
  name: "@yamada-ui/ignores/base",
  ignores: [
    "**/.next",
    "**/.turbo",
    "**/docs",
    "**/examples",
    "**/dist",
    "**/packages/cli/bin/index.js",
    "**/node_modules",
    "**/build",
    "**/pnpm-lock.yaml",
    "**/coverage",
    "**/storybook-static",
    "**/.storybook",
  ],
}

const tsconfigJsonFilePath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.json",
)

/** @type {Pick<ESLintConfig, "name" | "languageOptions">} */
const languageOptionConfig = languageOptionFactory(tsconfigJsonFilePath)

export default tseslintConfigs(
  ignoresConfig,
  languageOptionConfig,
  baseConfig,
  {
    name: "@yamada-ui/eslint/scripts",
    files: [
      "scripts/**/*.js",
      "scripts/**/*.cjs",
      "scripts/**/*.mjs",
      "scripts/**/*.jsx",
      "scripts/**/*.ts",
      "scripts/**/*.cts",
      "scripts/**/*.mts",
      "scripts/**/*.tsx",
      "scripts/**/*.d.ts",
    ],
    rules: {
      "no-console": "off",
    },
  },
  {
    name: "@yamada-ui/eslint/packages",
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
      "no-console": "off",
      "no-restricted-imports": ["error", "@yamada-ui/react"],
    },
  },
  {
    name: "@yamada-ui/eslint/disabled-in-testing-files",
    files: [
      "**/packages/**/test/**/*.ts",
      "**/packages/**/test/**/*.tsx",
      "**/packages/**/tests/**/*.ts",
      "**/packages/**/tests/**/*.tsx",
    ],
    rules: {
      "no-restricted-imports": "off",
    },
  },
  {
    name: "@yamada-ui/stories/base",
    files: ["stories/**/*.tsx"],
    rules: {
      "no-console": "off",
    },
  },
  typescriptConfig,
  ...importConfigArray,
  reactConfig,
  reactHooksConfig,
  vitestConfig,
  {
    name: "@yamada-ui/vitest/setup-tests",
    files: ["scripts/setup-test.ts"],
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      "vitest/prefer-spy-on": "off",
    },
  },
  testingLibraryConfig,
  prettierConfig,
)
