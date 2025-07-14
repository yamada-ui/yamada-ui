import type { TSESLint } from "@typescript-eslint/utils"
import prettierConfig from "eslint-config-prettier"
import { baseConfigArray } from "./base"
import { cspellConfig } from "./cspell"
import { importConfigArray } from "./import"
import { jsxA11yConfig } from "./jsx-a11y"
import { languageOptionFactory } from "./language-option"
import { perfectionistConfig } from "./perfectionist"
import { reactConfig } from "./react"
import { reactHooksConfig } from "./react-hooks"
import { sharedFiles } from "./shared"
import { testingLibraryConfig } from "./testing-library"
import { typescriptConfig } from "./typescript"
import { vitestConfig } from "./vitest"

export {
  baseConfigArray,
  cspellConfig,
  importConfigArray,
  jsxA11yConfig,
  languageOptionFactory,
  perfectionistConfig,
  prettierConfig,
  reactConfig,
  reactHooksConfig,
  sharedFiles,
  testingLibraryConfig,
  typescriptConfig,
  vitestConfig,
}

export const sharedConfigArray: TSESLint.FlatConfig.ConfigArray = [
  ...baseConfigArray,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  vitestConfig,
  testingLibraryConfig,
  prettierConfig,
]
