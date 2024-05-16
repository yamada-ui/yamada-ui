import { config as tseslintConfig } from "typescript-eslint"
import { tsESLintConfig } from "../eslint/typescript.mjs"
import { reactConfig, reactHooksConfig } from "../eslint/react.mjs"
import { importConfig } from "../eslint/import.mjs"
import pluginReact from "eslint-plugin-react"
import { FlatCompat } from "@eslint/eslintrc"

const compat = new FlatCompat({})

const exts = "{ts,tsx,cts,mts,d.ts}"

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
  ...compat.extends("next/core-web-vitals"),
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
    ...importConfig[0],
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
    ...reactConfig[0],
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
    ...reactHooksConfig[0],
  },
)
