import { FlatCompat } from "@eslint/eslintrc"
import eslintConfigPrettier from "eslint-config-prettier"
import pluginImport from "eslint-plugin-import"
import pluginPrettier from "eslint-plugin-prettier"
import pluginTestingLibrary from "eslint-plugin-testing-library"
import pluginUnusedImport from "eslint-plugin-unused-imports"
import pluginVitest from "eslint-plugin-vitest"
import globals from "globals"
import {
  config as tseslintConfig,
  parser as tseslintParser,
  plugin as tseslintPlugin,
} from "typescript-eslint"

const compat = new FlatCompat({})

const baseConfigs = [
  {
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        ecmaVersion: 10,
        project: "./tsconfig.json",
      },
      globals: {
        ...globals.es6,
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      prettier: pluginPrettier,
      "@typescript-eslint": tseslintPlugin,
    },
    rules: {
      ...pluginPrettier.configs.recommended.rules,
      "no-var": "error",
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/consistent-type-imports": "error",
    },
  },
  {
    files: ["scripts/**/*", "packages/cli/**/*", "stories/**/*"],
    rules: {
      "no-console": "off",
    },
  },
  {
    files: ["packages/utils/src/object.ts"],
    rules: {
      "@typescript-eslint/no-unused-vars": "off",
    },
  },
]

const importConfigs = [
  {
    plugins: {
      import: pluginImport,
      "unused-imports": pluginUnusedImport,
    },
    rules: {
      ...pluginImport.configs.recommended.rules,
      ...pluginImport.configs.typescript.rules,
      "unused-imports/no-unused-imports": "error",
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
      "import/parsers": {
        "@typescript-eslint/parser": [
          ".js",
          ".jsx",
          ".mjs",
          ".ts",
          ".tsx",
          ".mts",
          ".d.ts",
        ],
      },
      "import/resolver": {
        node: {
          extensions: [".js", ".jsx", ".ts", ".tsx", ".mts", ".d.ts"],
        },
      },
    },
  },
  {
    files: ["eslint.config.mjs"],
    rules: {
      "import/no-unresolved": "off",
    },
  },
]

const reactConfigs = [
  ...compat.extends("plugin:react/recommended"),
  ...compat.extends("plugin:react-hooks/recommended"),
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "react/jsx-curly-brace-presence": "error",
      "react/jsx-no-leaked-render": "error",
      "react-hooks/rules-of-hooks": "off",
    },
    settings: {
      react: {
        version: "detect",
      },
    },
  },
]

const vitestConfigs = [
  {
    files: ["**/*.test.js", "**/*.test.jsx", "**/*.test.ts", "**/*.test.tsx"],
    plugins: {
      vitest: pluginVitest,
    },
    rules: {
      ...pluginVitest.configs.recommended.rules,
      "vitest/consistent-test-it": ["error", { fn: "test" }],
      "vitest/expect-expect": "off",
      "vitest/no-alias-methods": "error",
      "vitest/no-conditional-expect": "error",
      "vitest/no-conditional-in-test": "error",
      "vitest/no-conditional-tests": "error",
      "vitest/prefer-comparison-matcher": "error",
      "vitest/no-test-return-statement": "error",
      "vitest/no-standalone-expect": "error",
      "vitest/no-duplicate-hooks": "error",
      "vitest/no-focused-tests": "error",
      "vitest/no-import-node-test": "error",
      "vitest/prefer-called-with": "error",
      "vitest/prefer-each": "error",
      "vitest/prefer-expect-resolves": "error",
      "vitest/prefer-hooks-in-order": "error",
      "vitest/prefer-hooks-on-top": "error",
      "vitest/prefer-mock-promise-shorthand": "error",
      "vitest/prefer-spy-on": "error",
      "vitest/prefer-strict-equal": "error",
      "vitest/prefer-to-be": "error",
      "vitest/prefer-to-be-falsy": "error",
      "vitest/prefer-to-be-object": "error",
      "vitest/prefer-to-be-truthy": "error",
      "vitest/prefer-to-contain": "error",
      "vitest/prefer-to-have-length": "error",
      "vitest/prefer-todo": "error",
      "vitest/require-hook": "error",
      "vitest/require-to-throw-message": "error",
      "vitest/require-top-level-describe": "error",
      "vitest/valid-expect": [
        "error",
        {
          alwaysAwait: true,
        },
      ],
    },
  },
  {
    files: ["scripts/setup-test.ts"],
    rules: {
      "vitest/prefer-spy-on": "off",
    },
  },
]

const testingLibraryConfigs = [
  {
    files: ["**/*.test.js", "**/*.test.jsx", "**/*.test.ts", "**/*.test.tsx"],
    plugins: {
      "testing-library": pluginTestingLibrary,
    },
    rules: {
      "testing-library/prefer-query-by-disappearance": "error",
      "testing-library/no-dom-import": "error",
      "testing-library/no-debugging-utils": "error",
      "testing-library/no-global-regexp-flag-in-query": "error",
      "testing-library/no-promise-in-fire-event": "error",
      "testing-library/prefer-find-by": "error",
      "testing-library/no-await-sync-queries": "error",
    },
  },
]

export default tseslintConfig(
  {
    ignores: [
      ".next",
      ".turbo",
      "**/dist",
      "node_modules",
      "build",
      "pnpm-lock.yaml",
      "examples",
      "storybook-static",
    ],
  },
  ...baseConfigs,
  ...importConfigs,
  ...reactConfigs,
  ...vitestConfigs,
  ...testingLibraryConfigs,
  eslintConfigPrettier,
)
