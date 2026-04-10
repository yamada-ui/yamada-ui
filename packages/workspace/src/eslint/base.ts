import type {
  ConfigWithExtends,
  ConfigWithExtendsArray,
} from "@eslint/config-helpers"
import { globalIgnores } from "@eslint/config-helpers"
import eslint from "@eslint/js"
import globals from "globals"
import { sharedFiles } from "./shared"

export const baseConfigArray: ConfigWithExtendsArray = [
  globalIgnores(
    [
      "**/.turbo/**",
      "**/.next/**",
      "**/.react-router/**",
      "**/.velite/**",
      "**/dist/**",
      "**/bin/**",
      "**/coverage/**",
      "**/storybook-static/**",
      "next-env.d.ts",
    ],
    "ignores",
  ),
  {
    name: "base",
    extends: [eslint.configs.recommended],
    files: sharedFiles,
    rules: {
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-empty": "off",
      "no-prototype-builtins": "off",
      "no-useless-escape": "off",
      "no-var": "error",
    },
  },
  {
    name: "language-options",
    files: sharedFiles,
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaVersion: 10,
        project: true,
        sourceType: "module",
        tsconfigRootDir: process.cwd(),
      },
    },
  },
]

export const noConsoleConfig = {
  name: "no-console",
  files: sharedFiles,
  rules: {
    "no-console": "off",
  },
} satisfies ConfigWithExtends
