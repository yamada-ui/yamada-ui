import { defineConfig } from "oxfmt"

export default defineConfig({
  bracketSpacing: true,
  ignorePatterns: [
    ".turbo",
    ".next",
    ".velite",
    "dist",
    "trace",
    "node_modules",
    "pnpm-lock.yaml",
    "coverage",
    "storybook-static",
    "routeTree.gen.ts",
  ],
  jsxSingleQuote: false,
  printWidth: 80,
  semi: false,
  singleQuote: false,
  sortPackageJson: false,
  tabWidth: 2,
  trailingComma: "all",
})
