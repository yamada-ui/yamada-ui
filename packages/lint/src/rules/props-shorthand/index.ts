import type { TSESTree } from "@typescript-eslint/utils"
import { ESLintUtils } from "@typescript-eslint/utils"
import { createUIComponentTracker } from "../../utils/ui-component-tracker"
import { getShorthandMap } from "./shorthand-map"

type MessageIds = "duplicateProps" | "preferLonghand" | "preferShorthand"
type Options = [{ preferred?: "longhand" | "shorthand" }?]

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/yamada-ui/yamada-ui/blob/main/packages/lint/src/rules/${name}/README.md`,
)

const getAttrName = (attr: TSESTree.JSXAttribute): string | null =>
  attr.name.type === "JSXIdentifier" ? attr.name.name : null

export const propsShorthand = createRule<Options, MessageIds>({
  name: "props-shorthand",
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Enforce consistent use of shorthand or longhand style props on Yamada UI components",
    },
    fixable: "code",
    hasSuggestions: false,
    messages: {
      duplicateProps:
        "Both '{{shorthand}}' and '{{longhand}}' are specified; keep only the preferred one.",
      preferLonghand:
        "Use longhand prop '{{longhand}}' instead of '{{shorthand}}'.",
      preferShorthand:
        "Use shorthand prop '{{shorthand}}' instead of '{{longhand}}'.",
    },
    schema: [
      {
        type: "object",
        additionalProperties: false,
        properties: {
          preferred: { type: "string", enum: ["shorthand", "longhand"] },
        },
      },
    ],
  },
  defaultOptions: [{ preferred: "shorthand" }],
  create(context, [options]) {
    const preferred = options?.preferred ?? "shorthand"
    const { longhandToShorthands, shorthandToLonghand } = getShorthandMap()
    const tracker = createUIComponentTracker(["@yamada-ui/react"])

    return {
      ImportDeclaration(node) {
        tracker.visitImport(node)
      },
      JSXOpeningElement(node) {
        if (!tracker.matchesJSXName(node.name)) return

        const attributes = node.attributes.filter(
          (a): a is TSESTree.JSXAttribute => a.type === "JSXAttribute",
        )
        const presentNames = new Set<string>()
        for (const a of attributes) {
          const name = getAttrName(a)
          if (name) presentNames.add(name)
        }

        for (const attr of attributes) {
          const name = getAttrName(attr)
          if (!name) continue

          if (preferred === "shorthand") {
            const shorts = longhandToShorthands.get(name)
            if (!shorts || shorts.length === 0) continue
            const duplicate = shorts.find((s) => presentNames.has(s))
            if (duplicate) {
              context.report({
                node: attr.name,
                messageId: "duplicateProps",
                data: { longhand: name, shorthand: duplicate },
              })
              continue
            }
            const short = shorts[0]
            if (!short) continue
            context.report({
              node: attr.name,
              messageId: "preferShorthand",
              data: { longhand: name, shorthand: short },
              fix: (fixer) => fixer.replaceText(attr.name, short),
            })
          } else {
            const long = shorthandToLonghand.get(name)
            if (!long) continue
            if (presentNames.has(long)) {
              context.report({
                node: attr.name,
                messageId: "duplicateProps",
                data: { longhand: long, shorthand: name },
              })
              continue
            }
            context.report({
              node: attr.name,
              messageId: "preferLonghand",
              data: { longhand: long, shorthand: name },
              fix: (fixer) => fixer.replaceText(attr.name, long),
            })
          }
        }
      },
    }
  },
})
