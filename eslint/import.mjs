import { FlatCompat } from "@eslint/eslintrc"
import pluginImport from "eslint-plugin-import"

const compat = new FlatCompat({
  recommendedConfig: pluginImport.configs.recommended,
})

export const importConfig = compat.config({
  plugins: ["import", "unused-imports"],
  rules: {
    "unused-imports/no-unused-imports": "error",
  },
  settings: {
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".mts", ".cts", ".tsx", ".d.ts"],
    },
    "import/resolver": {
      node: {
        extensions: [".js", ".jsx", ".ts", ".tsx", ".mts", ".d.ts"],
      },
      typescript: {
        alwaysTryTypes: true,
      },
    },
  },
})
