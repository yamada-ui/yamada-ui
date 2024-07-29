import { fixupPluginRules } from "@eslint/compat"
import {
  configs as tseslintConfigs,
  parser as tseslintParser,
  config as tseslintConfig,
} from "typescript-eslint"
import globals from "globals"
import eslint from "@eslint/js"
import pluginReact from "eslint-plugin-react"
import pluginImport from "eslint-plugin-import"
import pluginReactHooks from "eslint-plugin-react-hooks"
import pluginJsxA11y from "eslint-plugin-jsx-a11y"
import { resolve, dirname } from "node:path"
import { fileURLToPath } from "node:url"

export default tseslintConfig(
  {
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
        project: resolve(dirname(fileURLToPath(import.meta.url)), "./tsconfig.json"),
      },
      globals: {
        ...globals.browser,
        ...globals.commonjs,
        ...globals.es2015,
      },
    },
  },

  eslint.configs.recommended,

  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    plugins: {
      react: pluginReact,
      "react-hooks": fixupPluginRules(pluginReactHooks),
      "jsx-a11y": pluginJsxA11y,
    },
    rules: {
      ...pluginReact.configs.recommended.rules,
      ...pluginReact.configs["jsx-runtime"].rules,
      ...pluginReactHooks.configs.recommended.rules,
      ...pluginJsxA11y.configs.recommended.rules,
      "react/prop-types": "off"
    },
    settings: {
      react: {
        version: "detect",
      },
      formComponents: ["Form"],
      linkComponents: [
        {
          name: "Link",
          linkAttribute: "to",
        },
        {
          name: "NavLink",
          linkAttribute: "to",
        },
      ],
      "import/resolver": {
        typescript: {},
      },
    },
  },

  ...tseslintConfigs.recommended,
  {
    files: ["**/*.ts", "**/*.tsx"],
    plugins: {
      import: fixupPluginRules(pluginImport),
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      ...pluginImport.configs.typescript.rules,
    },
    settings: {
      "import/internal-regex": "^~/",
      "import/resolver": {
        node: {
          extensions: [".ts", ".tsx"],
        },
        typescript: {
          alwaysTryTypes: true,
        },
      },
    },
  },

  // Node
  {
    files: ["eslint.config.mjs"],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
)
