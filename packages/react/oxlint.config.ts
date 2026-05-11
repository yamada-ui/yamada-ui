import {
  createIgnoreCspellConfig,
  createNoRestrictedImportConfig,
  defineConfig,
  reactConfig,
  sharedBrowserTestFiles,
  sharedConfig,
  sharedFiles,
  sharedUnitTestFiles,
} from "@yamada-ui/workspace/oxlint"

export default defineConfig({
  extends: [
    sharedConfig,
    reactConfig,
    createNoRestrictedImportConfig(
      [sharedFiles.map((file) => `src/${file}`)],
      [
        sharedFiles.map((file) => `src/!(utils)/${file}`),
        "@yamada-ui/utils",
        "@yamada-ui/workspace/*",
      ],
      [sharedBrowserTestFiles, "#test"],
      [sharedUnitTestFiles, "#test/browser"],
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
