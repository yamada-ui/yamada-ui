import {
  cspellConfig,
  defineConfig,
  jsxA11yConfig,
  nextConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"

const config = defineConfig(
  ...sharedConfigArray,
  cspellConfig,
  nextConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
)

export default config
