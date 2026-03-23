import type { ConfigWithExtendsArray } from "@eslint/config-helpers"
import { baseConfigArray, noConsoleConfig } from "./base"
import { cspellConfig } from "./cspell"
import { importConfigArray, restrictedImportConfigArray } from "./import"
import { jsxA11yConfig } from "./jsx-a11y"
import { nextConfig } from "./next"
import { perfectionistConfig } from "./perfectionist"
import { prettierConfig } from "./prettier"
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
  nextConfig,
  noConsoleConfig,
  perfectionistConfig,
  prettierConfig,
  reactConfig,
  reactHooksConfig,
  restrictedImportConfigArray,
  sharedFiles,
  testingLibraryConfig,
  typescriptConfig,
  vitestConfig,
}

export const sharedConfigArray: ConfigWithExtendsArray = [
  ...baseConfigArray,
  typescriptConfig,
  ...importConfigArray,
  perfectionistConfig,
  vitestConfig,
  testingLibraryConfig,
  prettierConfig,
]
