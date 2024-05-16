import { FlatCompat } from "@eslint/eslintrc"
import pluginReact from "eslint-plugin-react"
import pluginReactHooks from "eslint-plugin-react-hooks"

const reactCompat = new FlatCompat({
  recommendedConfig: pluginReact.configs.recommended,
})

const reactHooksCompat = new FlatCompat({
  recommendedConfig: pluginReactHooks.configs.recommended,
})

export const reactConfig = reactCompat.config({
  plugins: ["react"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-no-leaked-render": "error",
  },
})

export const reactHooksConfig = reactHooksCompat.config({
  plugins: ["react-hooks"],
  settings: {
    react: {
      version: "detect",
    },
  },
  rules: {
    "react-hooks/rules-of-hooks": "off",
  },
})
