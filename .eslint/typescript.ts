import type { TSESLint } from "@typescript-eslint/utils"
import { plugin } from "typescript-eslint"
import { sharedFiles } from "./shared"

export const typescriptConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/typescript",
  files: sharedFiles,
  plugins: {
    "@typescript-eslint": plugin,
  },
  rules: {
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
        varsIgnorePattern: "^_",
      },
    ],
  },
}
