import {
  cspellConfig,
  defineConfig,
  globalIgnores,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"

const config = defineConfig(
  globalIgnores(["src/**/*.gen.ts"], "ignores"),
  ...sharedConfigArray,
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
)

export default config
