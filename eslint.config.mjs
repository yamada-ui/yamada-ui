import { config as tseslintConfig } from "typescript-eslint"
import { tsESLintConfig } from "./eslint/typescript.mjs"
import { reactConfig } from "./eslint/react.mjs"
import { vitestConfig } from "./eslint/vitest.mjs"
import { testingLibraryConfig } from "./eslint/testing-library.mjs"
import { importConfig } from "./eslint/import.mjs"

const exts = "{js,jsx,cjs,mjs,ts,tsx,cts,mts,d.ts}"

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
    files: [`scripts/**/*.${exts}`, `packages/**/*.${exts}`],
    ...tsESLintConfig,
  },
  {
    files: [`scripts/**/*.${exts}`, `packages/**/*.${exts}`],
    ...importConfig,
  },
  {
    files: [`packages/**/*.${exts}`],
    ...reactConfig,
  },
  {
    files: [
      `scripts/**/*.${exts}`,
      `packages/cli/**/*.${exts}`,
      `stories/**/*.${exts}`,
    ],
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
