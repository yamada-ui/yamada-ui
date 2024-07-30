import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"
import { fixupPluginRules } from "@eslint/compat"
import eslint from "@eslint/js"
import pluginImport from "eslint-plugin-import"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginReactRefresh from "eslint-plugin-react-refresh"
import globals from "globals"
import {
  config as tseslintConfig,
  configs as tseslintConfigs,
  parser as tseslintParser,
} from "typescript-eslint"

export default tseslintConfig(
  {
    ignores: ["**/dist"],
  },
  eslint.configs.recommended,
  ...tseslintConfigs.recommended,
  {
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: [
          resolve(
            dirname(fileURLToPath(import.meta.url)),
            "./tsconfig.app.json",
          ),
          resolve(
            dirname(fileURLToPath(import.meta.url)),
            "./tsconfig.node.json",
          ),
        ],
      },
      globals: {
        ...globals.browser,
        ...globals.es2020,
      },
    },
  },
  {
    plugins: {
      "react-hooks": fixupPluginRules(pluginReactHooks),
    },
    rules: {
      ...pluginReactHooks.configs.recommended.rules,
    },
  },
  {
    plugins: {
      "react-refresh": pluginReactRefresh,
    },
  },
  {
    plugins: {
      import: fixupPluginRules(pluginImport),
    },
    rules: {
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
          },
        },
      ],
      "import/named": "off",
      "import/no-anonymous-default-export": "off",
    },
  },
  {
    plugins: {
      react: pluginReact,
    },
    rules: {
      curly: "off",
      "no-unexpected-multiline": "off",
      "react/jsx-child-element-spacing": "off",
      "react/jsx-closing-bracket-location": "off",
      "react/jsx-closing-tag-location": "off",
      "react/jsx-curly-newline": "off",
      "react/jsx-curly-spacing": "off",
      "react/jsx-equals-spacing": "off",
      "react/jsx-first-prop-new-line": "off",
      "react/jsx-indent": "off",
      "react/jsx-indent-props": "off",
      "react/jsx-max-props-per-line": "off",
      "react/jsx-newline": "off",
      "react/jsx-one-expression-per-line": "off",
      "react/jsx-props-no-multi-spaces": "off",
      "react/jsx-tag-spacing": "off",
      "react/jsx-wrap-multilines": "off",
    },
  },
)
