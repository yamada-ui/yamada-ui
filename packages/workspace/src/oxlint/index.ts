import { defineConfig } from "oxlint"
import { baseConfig, noConsoleConfig } from "./base.ts"
import { createIgnoreCspellConfig, cspellConfig } from "./cspell.ts"
import { createNoRestrictedImportConfig, importConfig } from "./import.ts"
import { nextConfig } from "./next.ts"
import { perfectionistConfig } from "./perfectionist.ts"
import { reactConfig } from "./react.ts"
import { sharedFiles } from "./shared.ts"
import { testingLibraryConfig } from "./testing-library.ts"
import { typescriptConfig } from "./typescript.ts"
import { vitestConfig } from "./vitest.ts"

export {
  baseConfig,
  createIgnoreCspellConfig,
  createNoRestrictedImportConfig,
  cspellConfig,
  defineConfig,
  importConfig,
  nextConfig,
  noConsoleConfig,
  perfectionistConfig,
  reactConfig,
  sharedFiles,
  testingLibraryConfig,
  typescriptConfig,
  vitestConfig,
}

export const sharedConfig = defineConfig({
  extends: [
    baseConfig,
    typescriptConfig,
    importConfig,
    cspellConfig,
    perfectionistConfig,
    vitestConfig,
    testingLibraryConfig,
  ],
})
