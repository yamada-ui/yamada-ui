import {
  cspellConfig,
  jsxA11yConfig,
  nextConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"
import { defineConfig } from "eslint/config"

const config = defineConfig(
  ...sharedConfigArray,
  cspellConfig,
  nextConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
)

export default config
