const DIRECTIVES = new Set(["use cache", "use client", "use server"])

export default {
  rules: {
    "use-client-newline": {
      create(context: any) {
        return {
          ExpressionStatement(node: any) {
            if (
              node.expression?.type !== "Literal" ||
              typeof node.expression.value !== "string" ||
              !DIRECTIVES.has(node.expression.value)
            ) {
              return
            }

            const token = context.sourceCode.getTokenAfter(node)

            if (token && token.loc.start.line === node.loc.end.line + 1) {
              context.report({
                fix(fixer: any) {
                  return fixer.insertTextAfter(node, "\n")
                },
                messageId: "missingNewline",
                node,
              })
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
