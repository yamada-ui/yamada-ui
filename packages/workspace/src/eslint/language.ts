import type { TSESLint } from "@typescript-eslint/utils"
import globals from "globals"
import { parser } from "typescript-eslint"
import { sharedFiles } from "./shared"

export const createLanguageConfig = (
  project: TSESLint.ParserOptions["project"] = true,
  config: TSESLint.FlatConfig.Config = {},
): TSESLint.FlatConfig.Config => {
  const { languageOptions = {}, ...rest } = config
  return {
    name: "eslint/language-options",
    files: sharedFiles,
    languageOptions: {
      parser,
      ...languageOptions,
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2015,
        ...languageOptions.globals,
      },
      parserOptions: {
        ecmaVersion: 10,
        sourceType: "module",
        ...languageOptions.parserOptions,
        project,
      },
    },
    ...rest,
  }
}
