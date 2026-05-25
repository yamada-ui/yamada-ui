import type {
  ImportDeclaration,
  JSXIdentifier,
  JSXMemberExpression,
  JSXNamespacedName,
} from "estree-jsx"

type JSXTagNameExpression =
  | JSXIdentifier
  | JSXMemberExpression
  | JSXNamespacedName

export interface UIComponentTracker {
  matchesJSXName: (node: JSXTagNameExpression) => boolean
  visitImport: (node: ImportDeclaration) => void
}

const STYLED_FACTORY_NAME = "styled"

export function createUIComponentTracker(
  sourcePackages: readonly string[],
): UIComponentTracker {
  const components = new Set<string>()

  const namespaces = new Set<string>()

  function visitImport(node: ImportDeclaration): void {
    const source =
      typeof node.source.value === "string" ? node.source.value : ""
    if (!sourcePackages.includes(source)) return

    for (const spec of node.specifiers) {
      if (spec.type === "ImportSpecifier") {
        const imported =
          spec.imported.type === "Identifier"
            ? spec.imported.name
            : spec.imported.value

        if (imported === STYLED_FACTORY_NAME) {
          namespaces.add(spec.local.name)
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
  }

  function matchesJSXName(node: JSXTagNameExpression): boolean {
    if (node.type === "JSXIdentifier") {
      return components.has(node.name)
    }

    if (node.type === "JSXMemberExpression") {
      let object: JSXMemberExpression["object"] = node.object

      while (object.type === "JSXMemberExpression") {
        object = object.object
      }

      if (object.type === "JSXIdentifier") {
        return namespaces.has(object.name)
      }
    }

    return false
  }

  return { matchesJSXName, visitImport }
}
