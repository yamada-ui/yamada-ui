import {
  createNoRestrictedImportConfig,
  defineConfig,
  nextConfig,
  reactConfig,
  sharedConfig,
  sharedFiles,
} from "@yamada-ui/workspace/oxlint"

export default defineConfig({
  extends: [
    sharedConfig,
    nextConfig,
    reactConfig,
    createNoRestrictedImportConfig(
      ["app"],
      ["components"],
      ["theme"],
      ["data"],
    ),
  ],
  ignorePatterns: [".next", ".velite", "next-env.d.ts"],
  overrides: [
    { files: ["scripts/**"], rules: { "no-console": "off" } },
    {
      files: sharedFiles,
      rules: {
        "no-restricted-imports": ["error", { patterns: ["next/link"] }],
      },
    },
  ],
})
