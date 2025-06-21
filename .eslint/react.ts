import type { TSESLint } from "@typescript-eslint/utils"
import reactPlugin from "eslint-plugin-react"
import { sharedFiles } from "./shared"

const noDebugRule: TSESLint.LooseRuleDefinition = {
  create(context) {
    return {
      JSXAttribute(node: any) {
        if (node.name && node.name.name === "__debug") {
          context.report({
            messageId: "noDebugProp",
            node,
          })
        }
      },
    }
  },
  meta: {
    type: "problem",
    docs: {
      description: "Warn when using __debug prop",
    },
    messages: {
      noDebugProp:
        "`__debug` prop is for debugging only and should not be used in production.",
    },
    schema: [],
  },
}

const reactCustomPlugin: TSESLint.FlatConfig.Plugin = {
  meta: {
    name: "eslint-custom-plugin-react",
    version: "1.0.0",
  },
  rules: {
    "no-debug": noDebugRule,
  },
}

export const reactConfig: TSESLint.FlatConfig.Config = {
  name: "eslint/react",
  files: sharedFiles,
  plugins: { "custom-react": reactCustomPlugin, react: reactPlugin },
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

    "custom-react/no-debug": "warn",
  },
  settings: { react: { version: "detect" } },
}
