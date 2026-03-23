import type { ConfigWithExtends } from "@eslint/config-helpers"
import {
  jsxA11yConfig,
  nextConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
  cspellConfig as sharedCspellConfig,
  sharedFiles,
} from "@yamada-ui/workspace/eslint"
import { defineConfig } from "eslint/config"

const noConsoleConfig: ConfigWithExtends = {
  name: "no-console",
  files: ["scripts/**"],
  rules: {
    "no-console": "off",
  },
}

const cspellConfig: ConfigWithExtends = {
  ...sharedCspellConfig,
  ignores: [...sharedCspellConfig.ignores, "data/**", "contents/changelog/**"],
}

const restrictedImportConfig = {
  name: "import/next/link",
  files: sharedFiles,
  rules: {
    "no-restricted-imports": ["error", { patterns: ["next/link"] }],
  },
} satisfies ConfigWithExtends

const config = defineConfig(
  ...sharedConfigArray,
  restrictedImportConfig,
  cspellConfig,
  nextConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  noConsoleConfig,
)

export default config
