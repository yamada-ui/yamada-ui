import {
  cspellConfig,
  noConsoleConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"
import { defineConfig } from "eslint/config"

const config = defineConfig(...sharedConfigArray, noConsoleConfig, cspellConfig)

export default config
