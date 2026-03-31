import {
  cspellConfig,
  defineConfig,
  restrictedImportConfigArray,
  sharedConfigArray,
} from "./src/eslint/"

const config = defineConfig(
  ...sharedConfigArray,
  ...restrictedImportConfigArray,
  cspellConfig,
)

export default config
