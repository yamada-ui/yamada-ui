import type { TSESLint } from "@typescript-eslint/utils"
import prettierConfig from "eslint-config-prettier"
import { baseConfigArray } from "./base"
import { cspellConfig } from "./cspell"
import {
  createImportAliasConfig,
  importConfigArray,
  restrictedImportsConfigArray,
} from "./import"
import { jsxA11yConfig } from "./jsx-a11y"
import { createLanguageConfig } from "./language"
import { perfectionistConfig } from "./perfectionist"
import { reactConfig } from "./react"
import { reactHooksConfig } from "./react-hooks"
import { sharedFiles } from "./shared"
import { testingLibraryConfig } from "./testing-library"
import { typescriptConfig } from "./typescript"
import { vitestConfig } from "./vitest"

export {
  baseConfigArray,
  createImportAliasConfig,
  createLanguageConfig,
  cspellConfig,
  importConfigArray,
  jsxA11yConfig,
  perfectionistConfig,
  prettierConfig,
  reactConfig,
  reactHooksConfig,
  restrictedImportsConfigArray,
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
