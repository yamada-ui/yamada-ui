import { defineConfig } from "oxlint"
import { sharedFiles } from "./shared.ts"

export const importConfig = defineConfig({
  overrides: [
    {
      files: sharedFiles,
      plugins: ["import"],
      rules: {
        "import/extensions": [
          "error",
          "ignorePackages",
          Object.fromEntries(
            sharedFiles.map((value) => [value.split(".").at(-1), "never"]),
          ),
        ],
      },
    },
    {
      files: sharedFiles,
      jsPlugins: [import.meta.resolve("eslint-plugin-unused-imports")],
      rules: { "unused-imports/no-unused-imports": "error" },
    },
    {
      files: sharedFiles,
      jsPlugins: [
        {
          name: "import-alias",
          specifier: import.meta
            .resolve("@limegrass/eslint-plugin-import-alias"),
        },
      ],
      rules: {
        "import-alias/import-alias": [
          "error",
          { relativeImportOverrides: [{ depth: 0, path: "." }] },
        ],
      },
    },
  ],
})

export const createNoRestrictedImportConfig = (
  ...args: [string[], ...string[]][]
) =>
  defineConfig({
    overrides: (args.length
      ? args
      : [[sharedFiles.map((file) => `src/${file}`)]]
    ).map(([files, ...patterns]) => ({
      files,
      rules: {
        "no-restricted-imports": [
          "error",
          {
            patterns: patterns.length ? patterns : ["@yamada-ui/workspace/*"],
          },
        ],
      },
    })),
  })
