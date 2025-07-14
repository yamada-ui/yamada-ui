import type { TSESLint } from "@typescript-eslint/utils"
import {
  createLanguageConfig,
  cspellConfig,
  restrictedImportsConfigArray,
  sharedConfigArray,
  vitestConfig,
} from "@yamada-ui/workspace/eslint"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "tsconfig.json",
)

const languageConfig = createLanguageConfig(tsConfigPath)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  languageConfig,
  ...sharedConfigArray,
  ...restrictedImportsConfigArray,
  cspellConfig,
  vitestConfig,
)

export default config
