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
    "coverage",
    "storybook-static",
    "routeTree.gen.ts",
    "next-env.d.ts",
  ],
  jsxSingleQuote: false,
  printWidth: 80,
  semi: false,
  singleQuote: false,
  sortPackageJson: false,
  tabWidth: 2,
  trailingComma: "all",
})
