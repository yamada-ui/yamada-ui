import {
  parser as tseslintParser,
  plugin as tseslintPlugin,
} from "typescript-eslint"
import globals from "globals"

export const tsESLintConfig = {
  plugins: {
    "@typescript-eslint": tseslintPlugin,
  },
  languageOptions: {
    parser: tseslintParser,
    parserOptions: {
      ecmaVersion: 10,
      project: "./tsconfig.json",
    },
    globals: {
      ...globals.es2015,
      ...globals.browser,
      ...globals.node,
    },
  },
  rules: {
    "no-var": "error",
    "no-console": ["warn", { allow: ["warn", "error"] }],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        argsIgnorePattern: "^_",
        varsIgnorePattern: "^_",
        caughtErrorsIgnorePattern: "^_",
        destructuredArrayIgnorePattern: "^_",
      },
    ],
  },
}
