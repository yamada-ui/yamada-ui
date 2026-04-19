import type { TSESTree } from "@typescript-eslint/utils"

export interface UIComponentTracker {
  matchesJSXName: (node: TSESTree.JSXTagNameExpression) => boolean
  visitImport: (node: TSESTree.ImportDeclaration) => void
}

const UI_FACTORY_NAME = "ui"

export const createUIComponentTracker = (
  sourcePackages: readonly string[],
): UIComponentTracker => {
  const components = new Set<string>()
  const namespaces = new Set<string>()

  const visitImport: UIComponentTracker["visitImport"] = (node) => {
    const source =
      typeof node.source.value === "string" ? node.source.value : ""
    if (!sourcePackages.includes(source)) return

    for (const spec of node.specifiers) {
      if (spec.type === "ImportSpecifier") {
        const imported =
          spec.imported.type === "Identifier"
            ? spec.imported.name
            : spec.imported.value
        if (imported === UI_FACTORY_NAME) {
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

  const matchesJSXName: UIComponentTracker["matchesJSXName"] = (node) => {
    if (node.type === "JSXIdentifier") {
      return components.has(node.name)
    }
    if (node.type === "JSXMemberExpression") {
      let object: TSESTree.JSXMemberExpression["object"] = node.object
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
