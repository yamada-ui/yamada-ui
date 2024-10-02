import type { Linter } from "eslint"
import reactPlugin from "eslint-plugin-react"
import { sharedFiles } from "./shared"

export const reactConfig: Linter.Config = {
  name: "eslint/react",
  files: sharedFiles,
  plugins: { react: reactPlugin },
  rules: {
    ...reactPlugin.configs.recommended.rules,
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-no-leaked-render": "error",
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
  },
  settings: { react: { version: "detect" } },
}
