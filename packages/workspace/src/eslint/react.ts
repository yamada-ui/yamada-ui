import type { ConfigWithExtends, Plugin } from "@eslint/config-helpers"
import { AST_NODE_TYPES } from "@typescript-eslint/utils"
import react from "eslint-plugin-react"
import { sharedFiles } from "./shared"

const customReactPlugin: Plugin = {
  rules: {
    "use-client-newline": {
      create(context) {
        return {
          ExpressionStatement(node) {
            if (
              node.expression.type === AST_NODE_TYPES.Literal &&
              ["use cache", "use client", "use server"].includes(
                node.expression.value,
              )
            ) {
              const token = (context.sourceCode as any).getTokenAfter(node)

              if (token && token.loc.start.line === node.loc.end.line + 1) {
                context.report({
                  fix(fixer) {
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
  name: "react",
  extends: [react.configs.flat.recommended as ConfigWithExtends],
  files: sharedFiles,
  plugins: { "custom-react": customReactPlugin },
  rules: {
    "react/no-unescaped-entities": "off",
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",

    "react/forward-ref-uses-ref": "error",
    "react/jsx-boolean-value": "error",
    "react/jsx-curly-brace-presence": "error",
    "react/jsx-fragments": "error",
    "react/jsx-no-leaked-render": "error",
    "react/jsx-no-useless-fragment": "error",
    "react/jsx-pascal-case": "error",
    "react/self-closing-comp": "error",

    "custom-react/use-client-newline": "error",
  },
  settings: { react: { version: "detect" } },
} satisfies ConfigWithExtends
