import {
  cspellConfig,
  defineConfig,
  noConsoleConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"

const config = defineConfig(...sharedConfigArray, noConsoleConfig, cspellConfig)

export default config
