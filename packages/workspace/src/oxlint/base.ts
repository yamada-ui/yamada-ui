import { defineConfig } from "oxlint"
import { sharedFiles } from "./shared.ts"

export const baseConfig = defineConfig({
  env: {
    browser: true,
    builtin: true,
    node: true,
  },
  ignorePatterns: [".turbo"],
  options: { typeAware: true },
  overrides: [
    {
      files: sharedFiles,
      plugins: ["eslint"],
      rules: {
        "no-console": ["warn", { allow: ["warn", "error"] }],
        "no-empty": "off",
        "no-prototype-builtins": "off",
        "no-useless-escape": "off",
        "no-var": "error",
      },
    },
  ],
})

export const noConsoleConfig = defineConfig({
  overrides: [
    {
      files: sharedFiles,
      rules: {
        "no-console": "off",
      },
    },
  ],
})
