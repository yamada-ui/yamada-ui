import { fixupPluginRules } from "@eslint/compat"
import eslint from "@eslint/js"
import {
  config as tseslintConfig,
  configs as tseslintConfigs,
  parser as tseslintParser,
} from "typescript-eslint"
import { dirname, resolve } from "node:path"
import { fileURLToPath } from "node:url"
import globals from "globals"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"

export default tseslintConfig(
  {
    ignores: ["**/dist", "**/node_modules"],
  },
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        ecmaFeatures: {
          jsx: true,
        },
        sourceType: "module",
        project: resolve(
          dirname(fileURLToPath(import.meta.url)),
          "tsconfig.json",
        ),
      },
      globals: {
        ...globals.browser,
        ...globals.es2025,
      },
    },
  },
  {
    files: ["eslint.config.mjs", "vite.config.ts"],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        project: resolve(
          dirname(fileURLToPath(import.meta.url)),
          "tsconfig.node.json",
        ),
      },
      globals: {
        ...globals.node,
        ...globals.es2025,
      },
    },
  },
  eslint.configs.recommended,
  ...tseslintConfigs.recommended,
  ...tseslintConfigs.stylistic,
  {
    files: ["src/**/*.ts", "src/**/*.tsx"],
    plugins: {
      react: pluginReact,
      "react-hooks": fixupPluginRules(pluginReactHooks),
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReactHooks.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
    },
  },
)
