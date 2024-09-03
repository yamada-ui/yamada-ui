import { fixupPluginRules } from "@eslint/compat"
import eslint from "@eslint/js"
import pluginImport from "eslint-plugin-import"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import globals from "globals"
import {
  config as tseslintConfig,
  configs as tseslintConfigs,
  parser as tseslintParser,
} from "typescript-eslint"

export default tseslintConfig(
  {
    ignores: ["**/dist", "**/node_modules"],
  },
  {
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: true,
      },
      globals: {
        ...globals.browser,
        ...globals.es2025,
        ...globals.node,
        ...globals.commonjs,
      },
    },
  },
  {
    files: [
      "**/*.js",
      "**/*.cjs",
      "**/*.mjs",
      "**/*.jsx",
      "**/*.ts",
      "**/*.cts",
      "**/*.mts",
      "**/*.tsx",
      "**/*.d.ts",
    ],
    plugins: {
      import: fixupPluginRules(pluginImport),
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      ...pluginImport.configs.typescript.rules,
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
          },
        },
      ],
    },
    settings: {
      "import/internal-regex": "^~/",
      "import/parsers": {
        "@typescript-eslint/parser": [
          ".js",
          ".cjs",
          ".mjs",
          ".jsx",
          ".ts",
          ".cts",
          ".mts",
          ".tsx",
          ".d.ts",
        ],
      },
      "import/resolver": {
        node: {
          extensions: [
            ".js",
            ".cjs",
            ".mjs",
            ".jsx",
            ".ts",
            ".cts",
            ".mts",
            ".tsx",
            ".d.ts",
          ],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },
  {
    files: ["**/*.ts", "**/*.cts", "**/*.mts", "**/*.tsx", "**/*.d.ts"],
    rules: {
      "import/named": "off",
    },
  },
  eslint.configs.recommended,
  ...tseslintConfigs.recommended,
  ...tseslintConfigs.stylistic,
  {
    plugins: {
      react: pluginReact,
      "react-hooks": fixupPluginRules(pluginReactHooks),
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs["jsx-runtime"].rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/prop-types": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
      formComponents: ["Form"],
      linkComponents: [
        { name: "Link", linkAttribute: "to" },
        { name: "NavLink", linkAttribute: "to" },
      ],
    },
  },
  {
    plugins: {
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginJsxA11y.configs.recommended.rules,
    },
  },
)
