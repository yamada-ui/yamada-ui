import pluginReact from "eslint-plugin-react"

/** @type {Pick<import("eslint-plugin-react").Config, "name" | "files" | "plugins" | "rules" | "settings">} */
const reactConfig = {
  name: "@yamada-ui/react/base",
  files: [
    "**/*.js",
    "**/*.cjs",
    "**/*.mjs",
    "**/*.jsx",
    "**/*.ts",
    "**/*.cts",
    "**/*.mts",
    "**/*.tsx",
    "**/*.d.ts",
  ],
  plugins: {
    react: pluginReact,
  },
  rules: {
    ...pluginReact.configs.recommended.rules,
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/no-unescaped-entities": "off",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-no-leaked-render": "error",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}

export { reactConfig }
