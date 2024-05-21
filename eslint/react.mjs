import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"

export const reactConfig = {
  plugins: {
    react: pluginReact,
    "react-hooks": pluginReactHooks,
  },
  rules: {
    ...pluginReact.configs.recommended.rules,
    ...pluginReactHooks.configs.recommended.rules,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-no-leaked-render": "error",
    "react-hooks/rules-of-hooks": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
