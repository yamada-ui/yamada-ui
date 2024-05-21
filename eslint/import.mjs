import pluginImport from "eslint-plugin-import"
import pluginUnusedImports from "eslint-plugin-unused-imports"

export const importConfig = {
  plugins: { import: pluginImport, "unused-imports": pluginUnusedImports },
  rules: {
    ...pluginImport.configs.recommended.rules,
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [
        ".js",
        ".jsx",
        ".cjs",
        ".mjs",
        ".ts",
        ".mts",
        ".cts",
        ".tsx",
        ".d.ts",
      ],
    },
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".cjs",
          ".mjs",
          ".ts",
          ".tsx",
          ".cts",
          ".mts",
          ".d.ts",
        ],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
}
