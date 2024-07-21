import { plugin as tseslintPlugin } from "typescript-eslint"

/** @type {Pick<ESLintConfig, "name" | "files" | "plugins" | "rules">} */
const typescriptConfig = {
  name: "@yamada-ui/typescript/base",
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
    "@typescript-eslint": tseslintPlugin,
  },
  rules: {
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

export { typescriptConfig }
