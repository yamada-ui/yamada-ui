import type { ConfigWithExtends } from "./src/eslint"
import {
  cspellConfig,
  defineConfig,
  restrictedImportConfigArray,
  sharedConfigArray,
  sharedFiles,
} from "./src/eslint"

const noExtensionConfig: ConfigWithExtends = {
  name: "no-extension",
  files: sharedFiles,
  rules: {
    "import/extensions": "off",
  },
}

const config = defineConfig(
  ...sharedConfigArray,
  ...restrictedImportConfigArray,
  cspellConfig,
  noExtensionConfig,
)

export default config
