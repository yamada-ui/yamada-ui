import { defineConfig } from "oxfmt"

export default defineConfig({
  bracketSpacing: true,
  ignorePatterns: [
    ".turbo",
    ".next",
    ".react-router",
    ".velite",
    "dist",
    "trace",
    "node_modules",
    "pnpm-lock.yaml",
    "coverage",
    "storybook-static",
    "routeTree.gen.ts",
    "next-env.d.ts",
    "CHANGELOG.md",
  ],
  jsxSingleQuote: false,
  printWidth: 80,
  semi: false,
  singleQuote: false,
  sortPackageJson: false,
  tabWidth: 2,
  trailingComma: "all",
})
