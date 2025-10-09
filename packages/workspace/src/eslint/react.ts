import type { TSESLint } from "@typescript-eslint/utils"
import { AST_NODE_TYPES } from "@typescript-eslint/utils"
import reactPlugin from "eslint-plugin-react"
import { sharedFiles } from "./shared"

const customReactPlugin: TSESLint.FlatConfig.Plugin = {
  rules: {
    "use-client-newline": {
      create(context) {
        return {
          ExpressionStatement(node: any) {
            if (
              node.expression.type === AST_NODE_TYPES.Literal &&
              node.expression.value === "use client"
            ) {
              const sourceCode = context.getSourceCode()
              const token = sourceCode.getTokenAfter(node)

              if (token && token.loc.start.line === node.loc.end.line + 1) {
                context.report({
                  fix(fixer: TSESLint.RuleFixer) {
                    return fixer.insertTextAfter(node, "\n")
                  },
                  messageId: "missingNewline",
                  node,
                })
              }
            }
          },
        }
      },
      meta: {
        type: "layout",
        docs: { description: 'enforce newline after "use client"' },
        fixable: "whitespace",
        messages: {
          missingNewline: 'A newline is required after "use client".',
        },
        schema: [],
      },
    },
  },
}

export const reactConfig = {
  name: "eslint/react",
  files: sharedFiles,
  plugins: { "custom-react": customReactPlugin, react: reactPlugin },
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

    "custom-react/use-client-newline": "error",
  },
  settings: { react: { version: "detect" } },
} satisfies TSESLint.FlatConfig.Config
