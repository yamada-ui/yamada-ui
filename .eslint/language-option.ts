import type { TSESLint } from "@typescript-eslint/utils"
import globals from "globals"
import { parser } from "typescript-eslint"
import { sharedFiles } from "./shared"

export const languageOptionFactory = (
  tsConfigPath: string,
): TSESLint.FlatConfig.Config => ({
  name: "eslint/language-options",
  files: [...sharedFiles],
  languageOptions: {
    parser,
    parserOptions: {
      ecmaVersion: 10,
      sourceType: "module",
      project: tsConfigPath,
    },
    globals: {
      ...globals.browser,
      ...globals.node,
      ...globals.es2015,
    },
  },
})
