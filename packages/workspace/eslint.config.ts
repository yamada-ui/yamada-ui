import type { TSESLint } from "@typescript-eslint/utils"
import {
  cspellConfig,
  languageOptionFactory,
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

const languageOptionConfig = languageOptionFactory(tsConfigPath)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  languageOptionConfig,
  ...sharedConfigArray,
  cspellConfig,
  vitestConfig,
)

export default config
