import type { ConfigWithExtends } from "@eslint/config-helpers"
import {
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
} from "@yamada-ui/workspace/eslint"
import { defineConfig } from "eslint/config"

const languageOptionsConfig: ConfigWithExtends = {
  languageOptions: {
    parserOptions: {
      project: ["./tsconfig.app.json", "./tsconfig.node.json"],
      tsconfigRootDir: import.meta.dirname,
    },
  },
}

const config = defineConfig(
  ...sharedConfigArray,
  languageOptionsConfig,
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
)

export default config
