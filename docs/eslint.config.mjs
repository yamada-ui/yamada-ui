import { config as tseslintConfig } from "typescript-eslint"
import { tsESLintConfig } from "../eslint/typescript.mjs"
import { reactConfig } from "../eslint/react.mjs"
import { importConfig } from "../eslint/import.mjs"
import pluginNext from "@next/eslint-plugin-next"

const exts = "{js,jsx,cjs,mjs,ts,tsx,cts,mts,d.ts}"

export default tseslintConfig(
  {
    ignores: [
      ".next",
      ".contentlayer",
      "node_modules",
      "build",
      "pnpm-lock.yaml",
    ],
  },
  {
    files: [
      `@types/**/*.${exts}`,
      `contexts/**/*.${exts}`,
      `utils/**/*.${exts}`,
      `libs/**/*.${exts}`,
      `components/**/*.${exts}`,
      `constant/**/*.${exts}`,
      `layouts/**/*.${exts}`,
      `scripts/**/*.${exts}`,
      `theme/**/*.${exts}`,
      `hooks/**/*.${exts}`,
      `pages/**/*.${exts}`,
    ],
    ...tsESLintConfig,
  },
  {
    files: [
      `@types/**/*.${exts}`,
      `contexts/**/*.${exts}`,
      `utils/**/*.${exts}`,
      `libs/**/*.${exts}`,
      `components/**/*.${exts}`,
      `constant/**/*.${exts}`,
      `layouts/**/*.${exts}`,
      `scripts/**/*.${exts}`,
      `theme/**/*.${exts}`,
      `hooks/**/*.${exts}`,
      `pages/**/*.${exts}`,
    ],
    ...importConfig,
  },
  {
    files: [
      `@types/**/*.${exts}`,
      `contexts/**/*.${exts}`,
      `utils/**/*.${exts}`,
      `libs/**/*.${exts}`,
      `components/**/*.${exts}`,
      `layouts/**/*.${exts}`,
      `theme/**/*.${exts}`,
      `hooks/**/*.${exts}`,
      `pages/**/*.${exts}`,
    ],
    plugins: {
      "@next/next": pluginNext,
    },
    rules: {
      ...pluginNext.configs["core-web-vitals"].rules,
    },
  },
  {
    files: [
      `@types/**/*.${exts}`,
      `contexts/**/*.${exts}`,
      `utils/**/*.${exts}`,
      `libs/**/*.${exts}`,
      `components/**/*.${exts}`,
      `layouts/**/*.${exts}`,
      `theme/**/*.${exts}`,
      `hooks/**/*.${exts}`,
      `pages/**/*.${exts}`,
    ],
    ...reactConfig,
  },
)
