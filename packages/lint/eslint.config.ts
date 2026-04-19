import {
  cspellConfig,
  defineConfig,
  restrictedImportConfigArray,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"

const config = defineConfig(
  ...sharedConfigArray,
  ...restrictedImportConfigArray,
  cspellConfig,
)

export default config
