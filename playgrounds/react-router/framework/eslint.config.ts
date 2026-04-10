import {
  cspellConfig,
  defineConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"

const config = defineConfig(
  ...sharedConfigArray,
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
)

export default config
