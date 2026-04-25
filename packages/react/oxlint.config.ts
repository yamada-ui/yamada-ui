import {
  createIgnoreCspellConfig,
  createNoRestrictedImportConfig,
  defineConfig,
  reactConfig,
  sharedConfig,
} from "@yamada-ui/workspace/oxlint"

export default defineConfig({
  extends: [
    sharedConfig,
    reactConfig,
    createNoRestrictedImportConfig(
      ["src"],
      ["src/!(utils)", "@yamada-ui/utils", "@yamada-ui/workspace/*"],
    ),
    createIgnoreCspellConfig(
      "src/components/icon/icons",
      "src/providers/i18n-provider/intl",
    ),
  ],
  ignorePatterns: ["dist", "coverage", "storybook-static"],
  overrides: [
    {
      files: ["**/*.stories.tsx", "scripts/**"],
      rules: { "no-console": "off" },
    },
  ],
})
