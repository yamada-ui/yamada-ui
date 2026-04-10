"use server"

import tsParser from "@typescript-eslint/parser"
import { Linter } from "eslint"
import unusedImports from "eslint-plugin-unused-imports"

const linter = new Linter({ configType: "flat" })

const config: Linter.Config[] = [
  {
    files: ["**/*.tsx"],
    languageOptions: {
      parser: tsParser,
      parserOptions: { ecmaFeatures: { jsx: true } },
      sourceType: "module",
    },
    plugins: { "unused-imports": unusedImports },
    rules: {
      "unused-imports/no-unused-imports": "error",
      "unused-imports/no-unused-vars": "error",
    },
  },
]

export async function fixUnusedImports(code: string) {
  const filename = "App.tsx"
  const { output } = await Promise.resolve(
    linter.verifyAndFix(code, config, { filename }),
  )

  return output
}
