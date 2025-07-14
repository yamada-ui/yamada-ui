import type { TSESLint } from "@typescript-eslint/utils"
import jsxA11yPlugin from "eslint-plugin-jsx-a11y"
import { sharedFiles } from "./shared"

export const jsxA11yConfig = {
  name: "eslint/jsx-a11y",
  files: sharedFiles,
  plugins: {
    "jsx-a11y": jsxA11yPlugin as unknown as TSESLint.FlatConfig.Plugin,
  },
  rules: {
    ...jsxA11yPlugin.configs.recommended.rules,
    "jsx-a11y/no-autofocus": "off",
  },
} satisfies TSESLint.FlatConfig.Config
