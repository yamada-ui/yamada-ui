import type {
  ImportDeclaration,
  JSXIdentifier,
  JSXMemberExpression,
  JSXNamespacedName,
  VariableDeclarator,
} from "estree-jsx"

type JSXTagNameExpression =
  | JSXIdentifier
  | JSXMemberExpression
  | JSXNamespacedName

export interface FactoryTracker {
  matchesJSXName: (node: JSXTagNameExpression) => boolean
  visitImport: (node: ImportDeclaration) => void
  visitVariableDeclarator: (node: VariableDeclarator) => void
}

const STYLED_FACTORY_NAME = "styled"

export function createFactoryTracker(
  sourcePackages: readonly string[],
): FactoryTracker {
  const factories = new Set<string>()
  const components = new Set<string>()

  function visitImport(node: ImportDeclaration): void {
    const source =
      typeof node.source.value === "string" ? node.source.value : ""
    if (!sourcePackages.includes(source)) return

    for (const spec of node.specifiers) {
      if (spec.type !== "ImportSpecifier") continue

      const imported =
        spec.imported.type === "Identifier"
          ? spec.imported.name
          : spec.imported.value

      if (imported === STYLED_FACTORY_NAME) {
        factories.add(spec.local.name)
      }
    }
  }

  function visitVariableDeclarator(node: VariableDeclarator): void {
    if (node.id.type !== "Identifier") return
    if (node.init?.type !== "CallExpression") return
    if (node.init.callee.type !== "Identifier") return
    if (!factories.has(node.init.callee.name)) return

    components.add(node.id.name)
  }

  function matchesJSXName(node: JSXTagNameExpression): boolean {
    return node.type === "JSXIdentifier" && components.has(node.name)
  }

  return { matchesJSXName, visitImport, visitVariableDeclarator }
}
