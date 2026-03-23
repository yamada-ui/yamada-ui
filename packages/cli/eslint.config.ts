import {
  cspellConfig,
  noConsoleConfig,
  restrictedImportConfigArray,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"
import { defineConfig } from "eslint/config"

const config = defineConfig(
  ...sharedConfigArray,
  ...restrictedImportConfigArray,
  noConsoleConfig,
  cspellConfig,
)

export default config
