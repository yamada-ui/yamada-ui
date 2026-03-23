import type {
  ConfigWithExtends,
  ConfigWithExtendsArray,
} from "@eslint/config-helpers"
import {
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
  cspellConfig as sharedCspellConfig,
  sharedFiles,
  restrictedImportConfigArray as sharedRestrictedImportConfigArray,
  vitestConfig,
} from "@yamada-ui/workspace/eslint"
import { defineConfig } from "eslint/config"

const noConsoleConfig: ConfigWithExtends = {
  name: "no-console",
  files: ["**/*.stories.tsx"],
  rules: {
    "no-console": "off",
  },
}

const restrictedImportConfigArray: ConfigWithExtendsArray = [
  ...sharedRestrictedImportConfigArray,
  {
    name: "eslint/restricted-imports/utils",
    files: sharedFiles.map((file) => `src/!(utils)/${file}`),
    rules: {
      "no-restricted-imports": [
        "error",
        {
          patterns: [
            "@yamada-ui/react",
            "@yamada-ui/utils",
            "@yamada-ui/workspace/*",
          ],
        },
      ],
    },
  },
]

const cspellConfig: ConfigWithExtends = {
  ...sharedCspellConfig,
  ignores: [
    ...sharedCspellConfig.ignores,
    "src/components/icon/icons/**",
    "src/providers/i18n-provider/intl/*",
  ],
}

const config = defineConfig(
  ...sharedConfigArray,
  ...restrictedImportConfigArray,
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  vitestConfig,
  noConsoleConfig,
)

export default config
