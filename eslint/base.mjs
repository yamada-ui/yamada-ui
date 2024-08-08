/** @type {Pick<ESLintConfig, "name" | "files" | "rules">} */
const baseConfig = {
  name: "@yamada-ui/eslint/base",
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
  rules: {
    "no-var": "error",
    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
  },
}

export { baseConfig }
