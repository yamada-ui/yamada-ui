import type { TSESTree } from "@typescript-eslint/utils"
import type { RuleModule } from "@typescript-eslint/utils/ts-eslint"
import { ESLintUtils } from "@typescript-eslint/utils"
import { getShorthandMap } from "./shorthand-map"
import { createUIComponentTracker } from "./ui-component-tracker"

type MessageIds = "duplicateProps" | "preferLonghand" | "preferShorthand"

type Options = [{ preferred?: "longhand" | "shorthand" }?]

const createRule = ESLintUtils.RuleCreator(
  (name) =>
    `https://github.com/yamada-ui/yamada-ui/blob/main/packages/eslint-plugin/src/rules/${name}/README.md`,
)

function getAttrName(attr: TSESTree.JSXAttribute): null | string {
  return attr.name.type === "JSXIdentifier" ? attr.name.name : null
}

export const propsShorthand: RuleModule<MessageIds, Options> = createRule<
  Options,
  MessageIds
>({
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
        "Both '{{a}}' and '{{b}}' are specified for the same style property '{{longhand}}'; keep only one.",
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

        const byLonghand = new Map<
          string,
          { attr: TSESTree.JSXAttribute; name: string }[]
        >()
        for (const attr of attributes) {
          const name = getAttrName(attr)
          if (!name) continue

          const longhand =
            shorthandToLonghand.get(name) ??
            (longhandToShorthands.has(name) ? name : undefined)
          if (!longhand) continue

          const entries = byLonghand.get(longhand) ?? []
          entries.push({ attr, name })
          byLonghand.set(longhand, entries)
        }

        const duplicateNames = new Set<string>()
        for (const [longhand, entries] of byLonghand) {
          if (entries.length < 2) continue
          const [first, second] = entries
          if (!first || !second) continue
          for (const e of entries) duplicateNames.add(e.name)
          context.report({
            node: first.attr.name,
            messageId: "duplicateProps",
            data: { a: first.name, b: second.name, longhand },
          })
        }

        for (const attr of attributes) {
          const name = getAttrName(attr)
          if (!name) continue
          if (duplicateNames.has(name)) continue

          if (preferred === "shorthand") {
            if (shorthandToLonghand.has(name)) continue

            const shorts = longhandToShorthands.get(name)
            if (!shorts || shorts.length === 0) continue
            const short = shorts[0]
            if (!short) continue

            context.report({
              node: attr.name,
              messageId: "preferShorthand",
              data: { longhand: name, shorthand: short },
              fix: (fixer) => fixer.replaceText(attr.name, short),
            })
          } else {
            const longhand = shorthandToLonghand.get(name)
            if (!longhand) continue

            context.report({
              node: attr.name,
              messageId: "preferLonghand",
              data: { longhand, shorthand: name },
              fix: (fixer) => fixer.replaceText(attr.name, longhand),
            })
          }
        }
      },
    }
  },
})
