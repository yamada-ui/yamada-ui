import {
  cspellConfig,
  defineConfig,
  noConsoleConfig,
  restrictedImportConfigArray,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"

const config = defineConfig(
  ...sharedConfigArray,
  ...restrictedImportConfigArray,
  noConsoleConfig,
  cspellConfig,
)

export default config
