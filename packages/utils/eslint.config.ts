import {
  cspellConfig,
  restrictedImportConfigArray,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"
import { defineConfig } from "eslint/config"

const config = defineConfig(
  ...sharedConfigArray,
  ...restrictedImportConfigArray,
  cspellConfig,
)

export default config
