import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import { fixupPluginRules } from "@eslint/compat"
import pluginNext from "@next/eslint-plugin-next"
import { config as tseslintConfig } from "typescript-eslint"
import { typescriptConfig } from "../eslint/typescript.mjs"
import { baseConfig } from "../eslint/base.mjs"
import { reactHooksConfig } from "../eslint/react-hooks.mjs"
import { reactConfig } from "../eslint/react.mjs"
import { importConfigArray } from "../eslint/import.mjs"
import { languageOptionFactory } from "../eslint/language-options.mjs"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"

/** @typedef {import("typescript-eslint").ConfigWithExtends} ESLintConfig */

/** @type {Pick<ESLintConfig, "ignores">} */
const ignoreConfig = {
  name: "@yamada-ui/ignores/docs",
  ignores: [
    "**/.next/**",
    "**/*.mdx",
    "**/node_modules/**",
    "**/build/**",
    "**/pnpm-lock.yaml",
  ],
}

const tsconfigJsonFilePath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.json",
)

/** @type {Pick<ESLintConfig, "name" | "languageOptions">} */
const languageOptionsConfig = languageOptionFactory(tsconfigJsonFilePath)

export default tseslintConfig(
  ignoreConfig,
  languageOptionsConfig,
  baseConfig,
  {
    name: "@yamada-ui/eslint/docs",
    files: [
      "scripts/**/*.ts",
      "scripts/**/*.cts",
      "scripts/**/*.mts",
      "scripts/**/*.tsx",
      "scripts/**/*.d.ts",
      "server.ts",
      "pages/api/github/observe/**/*.ts",
    ],
    rules: {
      "no-console": "off",
    },
  },
  typescriptConfig,
  ...importConfigArray,
  {
    name: "@yamada-ui/import/docs",
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
      "**/*.jsx",
      "**/*.ts",
      "**/*.cts",
      "**/*.mts",
      "**/*.tsx",
      "**/*.d.ts",
    ],
    rules: {
      "import/order": "off",
    },
  },
  {
    ...reactConfig,
    files: [
      "components/**/*.ts",
      "components/**/*.tsx",
      "contexts/**/*.ts",
      "contexts/**/*.tsx",
      "hooks/**/*.ts",
      "hooks/**/*.tsx",
      "layouts/**/*.ts",
      "layouts/**/*.tsx",
      "pages/**/*.ts",
      "pages/**/*.tsx",
    ],
  },
  {
    ...reactHooksConfig,
    files: [
      "components/**/*.ts",
      "components/**/*.tsx",
      "contexts/**/*.ts",
      "contexts/**/*.tsx",
      "hooks/**/*.ts",
      "hooks/**/*.tsx",
      "layouts/**/*.ts",
      "layouts/**/*.tsx",
      "pages/**/*.ts",
      "pages/**/*.tsx",
    ],
  },
  {
    name: "@yamada-ui/docs/next",
    files: [
      "components/**/*.ts",
      "components/**/*.tsx",
      "contexts/**/*.ts",
      "contexts/**/*.tsx",
      "hooks/**/*.ts",
      "hooks/**/*.tsx",
      "layouts/**/*.ts",
      "layouts/**/*.tsx",
      "pages/**/*.ts",
      "pages/**/*.tsx",
    ],
    plugins: {
      "@next/next": fixupPluginRules(pluginNext),
    },
    rules: {
      ...pluginNext.configs.recommended.rules,
      ...pluginNext.configs["core-web-vitals"].rules,

      // These rules existed in the `.eslintrc`.
      "@next/next/no-assign-module-variable": "off",
      "@next/next/no-title-in-document-head": "off",
    },
  },
  {
    name: "@yamada-ui/jsx-a11y/docs",
    files: [
      "components/**/*.ts",
      "components/**/*.tsx",
      "contexts/**/*.ts",
      "contexts/**/*.tsx",
      "hooks/**/*.ts",
      "hooks/**/*.tsx",
      "layouts/**/*.ts",
      "layouts/**/*.tsx",
      "pages/**/*.ts",
      "pages/**/*.tsx",
    ],
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      "jsx-a11y/alt-text": [
        "warn",
        {
          elements: ["img"],
          img: ["Image"],
        },
      ],
      "jsx-a11y/aria-props": "warn",
      "jsx-a11y/aria-proptypes": "warn",
      "jsx-a11y/aria-unsupported-elements": "warn",
      "jsx-a11y/role-has-required-aria-props": "warn",
      "jsx-a11y/role-supports-aria-props": "warn",
    },
  },
)
