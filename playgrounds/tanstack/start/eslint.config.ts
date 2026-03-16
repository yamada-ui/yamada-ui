import {
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"
import { defineConfig, globalIgnores } from "eslint/config"

const config = defineConfig(
  globalIgnores(["src/**/*.gen.ts"], "ignores"),
  ...sharedConfigArray,
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
)

export default config
