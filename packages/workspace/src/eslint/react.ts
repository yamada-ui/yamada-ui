import type { TSESLint } from "@typescript-eslint/utils"
import reactPlugin from "eslint-plugin-react"
import { sharedFiles } from "./shared"

export const reactConfig = {
  name: "eslint/react",
  files: sharedFiles,
  plugins: { react: reactPlugin },
  rules: {
    ...reactPlugin.configs.recommended.rules,

    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",

    "react/forward-ref-uses-ref": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-fragments": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "error",
    "react/react-in-jsx-scope": "off",
    "react/self-closing-comp": "error",
  },
  settings: { react: { version: "detect" } },
} satisfies TSESLint.FlatConfig.Config
