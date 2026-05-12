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
      [sharedFiles.map((file) => `app/${file}`)],
      [sharedFiles.map((file) => `components/${file}`)],
      [sharedFiles.map((file) => `theme/${file}`)],
      [sharedFiles.map((file) => `data/${file}`)],
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
