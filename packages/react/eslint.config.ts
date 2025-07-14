import type { TSESLint } from "@typescript-eslint/utils"
import {
  jsxA11yConfig,
  languageOptionFactory,
  reactConfig,
  reactHooksConfig,
  sharedConfigArray,
  cspellConfig as sharedCspellConfig,
  sharedFiles,
  vitestConfig,
} from "@yamada-ui/workspace/eslint"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import tseslint from "typescript-eslint"

// TODO: Remove legacy-components
const ignoresConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/ignores",
  ignores: ["src/legacy-components/**", "src/theme/components/**"],
}

const restrictedImportsConfigArray: TSESLint.FlatConfig.ConfigArray = [
  {
    name: "eslint/restricted-imports/react",
    files: sharedFiles,
    rules: {
      "no-restricted-imports": ["error", "@yamada-ui/react"],
    },
  },
  {
    name: "eslint/restricted-imports/utils",
    files: [
      "src/!(utils)/**/*.ts",
      "src/!(utils)/**/*.cts",
      "src/!(utils)/**/*.mts",
      "src/!(utils)/**/*.tsx",
      "src/!(utils)/**/*.d.ts",
    ],
    rules: {
      "no-restricted-imports": ["error", "@yamada-ui/utils"],
    },
  },
]

const cspellConfig: TSESLint.FlatConfig.Config = {
  ...sharedCspellConfig,
  ignores: [...sharedCspellConfig.ignores, "src/components/icon/icons/**"],
}

const noConsoleConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/no-console",
  files: ["**/*.stories.tsx"],
  rules: {
    "no-console": "off",
  },
}

const tsConfigPath = resolve(
  dirname(fileURLToPath(import.meta.url)),
  "tsconfig.json",
)

const languageOptionConfig = languageOptionFactory(tsConfigPath)

const config: TSESLint.FlatConfig.ConfigArray = tseslint.config(
  languageOptionConfig,
  ...sharedConfigArray,
  ...restrictedImportsConfigArray,
  ignoresConfig,
  noConsoleConfig,
  cspellConfig,
  jsxA11yConfig,
  reactConfig,
  reactHooksConfig,
  vitestConfig,
)

export default config
