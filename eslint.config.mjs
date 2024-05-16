import { config as tseslintConfig } from "typescript-eslint"
import { tsESLintConfig } from "./eslint/typescript.mjs"
import { reactConfig, reactHooksConfig } from "./eslint/react.mjs"
import { vitestConfig } from "./eslint/vitest.mjs"
import { testingLibraryConfig } from "./eslint/testing-library.mjs"
import { importConfig } from "./eslint/import.mjs"

export default tseslintConfig(
  {
    ignores: [
      ".next",
      ".turbo",
      "**/dist",
      "node_modules",
      "build",
      "pnpm-lock.yaml",
      "examples",
      "storybook-static",
    ],
  },
  {
    files: [
      "scripts/**/*.{ts,tsx,cts,mts,d.ts}",
      "packages/**/*.{ts,tsx,cts,mts,d.ts}",
    ],
    ...tsESLintConfig,
  },
  {
    files: [
      "scripts/**/*.{ts,tsx,cts,mts,d.ts}",
      "packages/**/*.{ts,tsx,cts,mts,d.ts}",
    ],
    ...importConfig[0],
  },
  {
    files: ["packages/**/*.{ts,tsx,cts,mts,d.ts}"],
    ...reactConfig[0],
  },
  {
    files: ["packages/**/*.{ts,tsx,cts,mts,d.ts}"],
    ...reactHooksConfig[0],
  },
  {
    files: ["scripts/**/*", "packages/cli/**/*", "stories/**/*"],
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["packages/**/*.test.{ts,tsx,cts,mts,d.ts}"],
    ...vitestConfig,
  },
  {
    files: ["packages/**/*.test.{ts,tsx,cts,mts,d.ts}"],
    ...testingLibraryConfig,
  },
  {
    files: ["packages/**/*.test.{ts,tsx,cts,mts,d.ts}"],
    rules: {
      "vitest/require-hook": "error",
    },
  },
  {
    files: ["packages/hooks/use-clipboard/tests/index.test.ts"],
    rules: {
      "vitest/require-hook": "off",
    },
  },
  {
    files: ["scripts/setup-test.ts"],
    rules: {
      "vitest/prefer-spy-on": "off",
    },
  },
)
