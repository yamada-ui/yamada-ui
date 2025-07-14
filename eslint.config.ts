import type { TSESLint } from "@typescript-eslint/utils"
import {
  cspellConfig,
  createLanguageConfig,
  sharedConfigArray,
  sharedFiles,
} from "@yamada-ui/workspace/eslint"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"

const noConsoleConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/no-console",
  files: sharedFiles,
  rules: {
    "no-console": "off",
  },
}

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "tsconfig.json",
)

const languageConfig = createLanguageConfig(tsConfigPath)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  languageConfig,
  ...sharedConfigArray,
  cspellConfig,
  noConsoleConfig,
)

export default config
