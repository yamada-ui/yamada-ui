import { defineConfig } from "oxlint"
import { sharedFiles, sharedTestFiles } from "./shared.ts"

export const reactConfig = defineConfig({
  overrides: [
    {
      files: sharedFiles,
      plugins: ["react", "jsx-a11y"],
      rules: {
        "react/forward-ref-uses-ref": "error",
        "react/immutability": "off",
        "react/jsx-boolean-value": "error",
        "react/jsx-curly-brace-presence": "error",
        "react/jsx-fragments": "error",
        "react/jsx-no-useless-fragment": "error",
        "react/jsx-pascal-case": "error",
        "react/preserve-manual-memoization": "off",
        "react/refs": "off",
        "react/self-closing-comp": "error",
        "react/set-state-in-effect": "off",
        "react/static-components": "off",

        "react-hooks/exhaustive-deps": "error",

        "jsx-a11y/no-autofocus": "off",
        "jsx-a11y/prefer-tag-over-role": "off",
      },
    },
    {
      files: sharedTestFiles,
      plugins: ["react"],
      rules: {
        "react/no-this-in-sfc": "off",
      },
    },
  ],
})
