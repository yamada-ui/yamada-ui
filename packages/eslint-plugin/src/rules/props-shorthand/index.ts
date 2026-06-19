import type { Rule } from "eslint"
import type { JSXAttribute } from "estree-jsx"
import { getShorthandMap } from "./shorthand-map"
import { createUIComponentTracker } from "./ui-component-tracker"

interface Options {
  preferred?: "longhand" | "shorthand"
  sources?: string[]
}

const DEFAULT_SOURCES = ["@yamada-ui/react", "@workspaces/ui"] as const

function getAttrName(attr: JSXAttribute): null | string {
  return attr.name.type === "JSXIdentifier" ? attr.name.name : null
}

export const propsShorthand: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    docs: {
      description:
        "Enforce consistent use of shorthand or longhand style props on Yamada UI components",
    },
    fixable: "code",
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
          sources: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
          },
        },
      },
    ],
  },

  create(context) {
    const options = (context.options[0] ?? {}) as Options
    const preferred = options.preferred ?? "shorthand"

    const { longhandToShorthands, shorthandToLonghand } = getShorthandMap()

    const tracker = createUIComponentTracker(options.sources ?? DEFAULT_SOURCES)

    return {
      ImportDeclaration(node) {
        tracker.visitImport(node)
      },

      VariableDeclarator(node) {
        tracker.visitVariableDeclarator(node)
      },

      JSXOpeningElement(node) {
        if (!tracker.matchesJSXName(node.name)) return

        const attributes = node.attributes.filter(
          (a): a is JSXAttribute => a.type === "JSXAttribute",
        )

        const byLonghand = new Map<
          string,
          { attr: JSXAttribute; name: string }[]
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

          for (const e of entries) {
            duplicateNames.add(e.name)
          }

          context.report({
            data: { a: first.name, b: second.name, longhand },
            messageId: "duplicateProps",
            node: first.attr.name,
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
              data: { longhand: name, shorthand: short },
              fix: (fixer) => fixer.replaceText(attr.name, short),
              messageId: "preferShorthand",
              node: attr.name,
            })
          } else {
            const longhand = shorthandToLonghand.get(name)
            if (!longhand) continue

            context.report({
              data: { longhand, shorthand: name },
              fix: (fixer) => fixer.replaceText(attr.name, longhand),
              messageId: "preferLonghand",
              node: attr.name,
            })
          }
        }
      },
    }
  },
}
