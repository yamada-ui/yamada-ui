import type { Linter } from "eslint"
import pluginReact from "eslint-plugin-react"
import { sharedFiles } from "./shared"

export const reactConfig: Linter.Config = {
  name: "eslint/react",
  files: sharedFiles,
  plugins: { react: pluginReact },
  rules: {
    ...pluginReact.configs.recommended.rules,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-no-leaked-render": "error",
  },
  settings: { react: { version: "detect" } },
}
