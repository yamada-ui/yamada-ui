import type { Rule } from "eslint"
import type { Expression, JSXAttribute, Literal } from "estree-jsx"
import { createUIComponentTracker } from "../../utils/ui-component-tracker"
import { getPropTokenScaleMap, getValueToTokenMap } from "./token-map"

interface Options {
  ignoreScales?: string[]
  sources?: string[]
}

const DEFAULT_SOURCES = ["@yamada-ui/react", "@workspaces/ui"] as const

const DETECTION_PATTERNS: Record<string, RegExp> = {
  aspectRatios: /^\d+(\.\d+)?\s*\/\s*\d+(\.\d+)?$/,
  blurs: /^-?\d+(\.\d+)?(px|rem|em)$/,
  borders: /^\d+(\.\d+)?px\s+solid$/,
  colors: /^#[0-9a-fA-F]{3,8}$|^rgba?\(.+\)$|^hsla?\(.+\)$/,
  durations: /^\d+(\.\d+)?m?s$/,
  easings: /^cubic-bezier\(.+\)$/,
  fontSizes: /^-?\d+(\.\d+)?(px|rem|em)$/,
  fontWeights: /^\d{3}$/,
  letterSpacings: /^-?\d+(\.\d+)?em$/,
  lineHeights: /^\d+(\.\d+)?$/,
  radii: /^-?\d+(\.\d+)?(px|rem|em)$/,
  sizes: /^-?\d+(\.\d+)?(px|rem|em)$/,
  spaces: /^-?\d+(\.\d+)?(px|rem|em)$/,
  zIndices: /^\d+$/,
}

const CSS_KEYWORDS = new Set([
  "auto",
  "inherit",
  "initial",
  "none",
  "revert",
  "unset",
])

const SKIPPED_CSS_FUNCTIONS = new Set([
  "calc",
  "clamp",
  "env",
  "max",
  "min",
  "var",
])

const ZERO_VALUES = new Set(["0", "0px", "0rem", "0em"])

const COMPOUND_VALUE_SCALES = new Set([
  "aspectRatios",
  "borders",
  "colors",
  "easings",
])

function getAttrName(attr: JSXAttribute): null | string {
  return attr.name.type === "JSXIdentifier" ? attr.name.name : null
}

function isCSSFunction(value: string): boolean {
  const match = /^([a-zA-Z-]+)\(/.exec(value)
  if (!match || !match[1]) return false
  return SKIPPED_CSS_FUNCTIONS.has(match[1])
}

function isZeroValue(value: string): boolean {
  return ZERO_VALUES.has(value)
}

function hasSpaces(value: string): boolean {
  return /\s/.test(value)
}

function isNegativeValue(value: string): boolean {
  return value.startsWith("-")
}

function isFontWeightMultipleOf100(value: string): boolean {
  const num = Number(value)
  return Number.isFinite(num) && num >= 100 && num <= 900 && num % 100 === 0
}

function isNumericKey(tokenName: string): boolean {
  return Number.isFinite(Number(tokenName))
}

function matchesDetectionPattern(scale: string, value: string): boolean {
  const pattern = DETECTION_PATTERNS[scale]
  if (!pattern) return false
  return pattern.test(value)
}

function shouldSkipValue(value: string, scale: string): boolean {
  if (CSS_KEYWORDS.has(value)) return true
  if (isZeroValue(value)) return true
  if (isCSSFunction(value)) return true
  if (hasSpaces(value) && !COMPOUND_VALUE_SCALES.has(scale)) return true

  return false
}

function lookupToken(
  value: string,
  scale: string,
  valueToTokenMap: Map<string, Map<string, string>>,
): null | string {
  const reverseMap = valueToTokenMap.get(scale)
  if (!reverseMap) return null

  const lookupValue = scale === "colors" ? value.toLowerCase() : value
  return reverseMap.get(lookupValue) ?? null
}

export const noHardcodedToken: Rule.RuleModule = {
  meta: {
    type: "suggestion",
    fixable: "code",
    messages: {
      noHardcodedToken:
        "Hard-coded value '{{value}}' in prop '{{prop}}'. Use design token '{{token}}' instead.",
      noHardcodedTokenNoFix:
        "Hard-coded value '{{value}}' in prop '{{prop}}' (token scale: '{{scale}}'). Consider using a design token.",
    },
    schema: [
      {
        type: "object",
        additionalProperties: false,
        properties: {
          ignoreScales: {
            type: "array",
            items: { type: "string" },
            uniqueItems: true,
          },
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
    const ignoreScales = new Set(options.ignoreScales ?? [])

    const propTokenScaleMap = getPropTokenScaleMap()
    const valueToTokenMap = getValueToTokenMap()

    const tracker = createUIComponentTracker(options.sources ?? DEFAULT_SOURCES)

    function reportLiteral(
      literalNode: Literal,
      value: string,
      propName: string,
      scale: string,
      isDirectAttrValue: boolean,
    ): void {
      const token = lookupToken(value, scale, valueToTokenMap)
      if (!token) {
        context.report({
          data: {
            prop: propName,
            scale,
            value,
          },
          messageId: "noHardcodedTokenNoFix",
          node: literalNode,
        })
        return
      }

      if (isNegativeValue(value) && isNumericKey(token)) {
        context.report({
          data: {
            prop: propName,
            scale,
            value,
          },
          messageId: "noHardcodedTokenNoFix",
          node: literalNode,
        })
        return
      }

      if (isNumericKey(token)) {
        const numericValue = Number(token)
        context.report({
          data: {
            prop: propName,
            token: `{${numericValue}}`,
            value,
          },
          fix: (fixer) => {
            if (isDirectAttrValue) {
              if (!literalNode.range) return null
              return fixer.replaceTextRange(
                [literalNode.range[0] - 1, literalNode.range[1]],
                `={${numericValue}}`,
              )
            }
            return fixer.replaceText(
              literalNode as unknown as Rule.Node,
              String(numericValue),
            )
          },
          messageId: "noHardcodedToken",
          node: literalNode,
        })
      } else {
        context.report({
          data: {
            prop: propName,
            token: `"${token}"`,
            value,
          },
          fix: (fixer) =>
            fixer.replaceText(
              literalNode as unknown as Rule.Node,
              `"${token}"`,
            ),
          messageId: "noHardcodedToken",
          node: literalNode,
        })
      }
    }

    function checkStringValue(
      literalNode: Literal,
      value: string,
      propName: string,
      scale: string,
      isDirectAttrValue: boolean,
    ): void {
      if (shouldSkipValue(value, scale)) return
      if (!matchesDetectionPattern(scale, value)) return

      reportLiteral(literalNode, value, propName, scale, isDirectAttrValue)
    }

    function checkNumericValue(
      literalNode: Literal,
      value: number,
      propName: string,
      scale: string,
    ): void {
      if (value === 0) return

      const isNumericMatchScale =
        scale === "fontWeights" || scale === "zIndices"
      if (!isNumericMatchScale) return

      const strValue = String(value)

      if (scale === "fontWeights" && !isFontWeightMultipleOf100(strValue)) {
        return
      }

      if (shouldSkipValue(strValue, scale)) return
      if (!matchesDetectionPattern(scale, strValue)) return

      reportLiteral(literalNode, strValue, propName, scale, false)
    }

    function checkValueNode(
      node: Expression | Literal,
      propName: string,
      scale: string,
      isDirectAttrValue: boolean,
    ): void {
      if (node.type === "Literal") {
        if (typeof node.value === "string") {
          checkStringValue(node, node.value, propName, scale, isDirectAttrValue)
        } else if (typeof node.value === "number") {
          checkNumericValue(node, node.value, propName, scale)
        }
        return
      }

      if (node.type === "ArrayExpression") {
        for (const element of node.elements) {
          if (!element || element.type === "SpreadElement") continue
          checkValueNode(element, propName, scale, false)
        }
        return
      }

      if (node.type === "ObjectExpression") {
        for (const prop of node.properties) {
          if (prop.type === "SpreadElement") continue
          if (prop.value.type === "AssignmentPattern") continue
          checkValueNode(prop.value as Expression, propName, scale, false)
        }
        return
      }

      if (node.type === "ConditionalExpression") {
        checkValueNode(node.consequent, propName, scale, false)
        checkValueNode(node.alternate, propName, scale, false)
        return
      }
    }

    return {
      ImportDeclaration(node) {
        tracker.visitImport(node)
      },

      VariableDeclarator(node) {
        tracker.visitVariableDeclarator(node)
      },

      JSXOpeningElement(node) {
        if (!tracker.matchesJSXName(node.name)) return

        for (const attr of node.attributes) {
          if (attr.type !== "JSXAttribute") continue

          const propName = getAttrName(attr)
          if (!propName) continue

          const scale = propTokenScaleMap.get(propName)
          if (!scale) continue
          if (ignoreScales.has(scale)) continue
          if (!DETECTION_PATTERNS[scale]) continue

          const { value } = attr
          if (!value) continue

          if (value.type === "Literal") {
            if (typeof value.value === "string") {
              checkStringValue(value, value.value, propName, scale, true)
            }
            continue
          }

          if (value.type === "JSXExpressionContainer") {
            const expr = value.expression
            if (expr.type === "JSXEmptyExpression") continue
            checkValueNode(expr, propName, scale, false)
          }
        }
      },
    }
  },
}
