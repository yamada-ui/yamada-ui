import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import { fixupPluginRules } from "@eslint/compat"
import pluginNext from "@next/eslint-plugin-next"
import type { Linter } from "eslint"
import tseslint from "typescript-eslint"
import {
  baseConfig,
  importConfigArray,
  languageOptionFactory,
  reactConfig as sharedReactConfig,
  reactHooksConfig as sharedReactHooksConfig,
  typescriptConfig,
} from "../.eslint"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"

const sharedFiles = [
  "components/**/*.ts",
  "components/**/*.tsx",
  "constants/**/*.ts",
  "constants/**/*.tsx",
  "contexts/**/*.ts",
  "contexts/**/*.tsx",
  "hooks/**/*.ts",
  "hooks/**/*.tsx",
  "layouts/**/*.ts",
  "layouts/**/*.tsx",
  "pages/**/*.ts",
  "pages/**/*.tsx",
]

const ignoreConfig: Linter.Config = {
  name: "eslint/ignores",
  ignores: ["**/.next/**", "**/*.mdx", "**/node_modules/**", "pnpm-lock.yaml"],
}

const noConsoleConfig: Linter.Config = {
  name: "eslint/no-console",
  files: ["scripts/**/*.ts", "server.ts", "pages/api/github/observe/**/*.ts"],
  rules: {
    "no-console": "off",
  },
}

const reactConfig: Linter.Config = {
  ...sharedReactConfig,
  files: sharedFiles,
}

const reactHooksConfig: Linter.Config = {
  ...sharedReactHooksConfig,
  files: sharedFiles,
}

const noOrderConfig: Linter.Config = {
  name: "eslint/import/no-order",
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
    // "import/order": "off",
    // "import/no-named-as-default": "off",
  },
}

const nextConfig: Linter.Config = {
  name: "eslint/next",
  files: sharedFiles,
  plugins: {
    "@next/next": fixupPluginRules(pluginNext),
  },
  rules: {
    ...pluginNext.configs.recommended.rules,
    ...pluginNext.configs["core-web-vitals"].rules,
    "@next/next/no-assign-module-variable": "off",
    "@next/next/no-title-in-document-head": "off",
  },
}

const a11yConfig: Linter.Config = {
  name: "eslint/a11y",
  files: sharedFiles,
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
}

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "./tsconfig.json",
)

const languageOptionsConfig = languageOptionFactory(tsConfigPath)

export default tseslint.config(
  ignoreConfig,
  languageOptionsConfig,
  baseConfig,
  noConsoleConfig,
  typescriptConfig,
  ...importConfigArray,
  noOrderConfig,
  reactConfig,
  reactHooksConfig,
  nextConfig,
  a11yConfig,
)
