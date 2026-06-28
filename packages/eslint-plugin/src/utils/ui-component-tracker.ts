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

export interface UIComponentTracker {
  matchesJSXName: (node: JSXTagNameExpression) => boolean
  visitImport: (node: ImportDeclaration) => void
  visitVariableDeclarator: (node: VariableDeclarator) => void
}

const STYLED_FACTORY_NAME = "styled"

export function createUIComponentTracker(
  sourcePackages: readonly string[],
): UIComponentTracker {
  const components = new Set<string>()

  const namespaces = new Set<string>()

  const styledFactories = new Set<string>()

  function visitImport(node: ImportDeclaration): void {
    const source =
      typeof node.source.value === "string" ? node.source.value : ""
    if (!sourcePackages.includes(source)) return

    for (const spec of node.specifiers)
      if (spec.type === "ImportSpecifier") {
        const imported =
          spec.imported.type === "Identifier"
            ? spec.imported.name
            : spec.imported.value

        if (imported === STYLED_FACTORY_NAME) {
          namespaces.add(spec.local.name)
          styledFactories.add(spec.local.name)
        } else {
          components.add(spec.local.name)
        }
      } else if (
        spec.type === "ImportDefaultSpecifier" ||
        spec.type === "ImportNamespaceSpecifier"
      ) {
        namespaces.add(spec.local.name)
      }
  }

  function visitVariableDeclarator(node: VariableDeclarator): void {
    if (node.id.type !== "Identifier") return
    if (node.init?.type !== "CallExpression") return

    const callee = node.init.callee

    if (callee.type === "Identifier") {
      if (styledFactories.has(callee.name)) components.add(node.id.name)

      return
    }

    if (callee.type === "MemberExpression") {
      const object = callee.object
      const property = callee.property
      if (
        object.type === "Identifier" &&
        namespaces.has(object.name) &&
        !callee.computed &&
        property.type === "Identifier" &&
        property.name === STYLED_FACTORY_NAME
      )
        components.add(node.id.name)
    }
  }

  function matchesJSXName(node: JSXTagNameExpression): boolean {
    if (node.type === "JSXIdentifier") return components.has(node.name)

    if (node.type === "JSXMemberExpression") {
      let object: JSXMemberExpression["object"] = node.object

      while (object.type === "JSXMemberExpression") object = object.object

      if (object.type === "JSXIdentifier") return namespaces.has(object.name)
    }

    return false
  }

  return { matchesJSXName, visitImport, visitVariableDeclarator }
}
