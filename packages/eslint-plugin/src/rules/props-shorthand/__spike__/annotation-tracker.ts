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

interface TSTypeNodeLike {
  type: string
  typeName?: { name?: string; type: string }
  types?: TSTypeNodeLike[]
}

interface TSTypeAliasLike {
  id?: { name?: string; type: string }
  type: string
  typeAnnotation?: TSTypeNodeLike
}

interface AnnotatedParamLike {
  typeAnnotation?: {
    type: string
    typeAnnotation?: TSTypeNodeLike
  }
}

export interface AnnotationTracker {
  matchesJSXName: (node: JSXTagNameExpression) => boolean
  visitImport: (node: ImportDeclaration) => void
  visitTypeAlias: (node: { type: string }) => void
  visitVariableDeclarator: (node: VariableDeclarator) => void
}

export function createAnnotationTracker(
  sourcePackages: readonly string[],
): AnnotationTracker {
  const uiTypeNames = new Set<string>()
  const components = new Set<string>()

  function visitImport(node: ImportDeclaration): void {
    const source =
      typeof node.source.value === "string" ? node.source.value : ""
    if (!sourcePackages.includes(source)) return

    for (const spec of node.specifiers) {
      if (spec.type !== "ImportSpecifier") continue
      uiTypeNames.add(spec.local.name)
    }
  }

  function typeReferencesUI(typeNode: TSTypeNodeLike | undefined): boolean {
    if (!typeNode) return false

    if (typeNode.type === "TSTypeReference") {
      return (
        typeNode.typeName?.type === "Identifier" &&
        typeof typeNode.typeName.name === "string" &&
        uiTypeNames.has(typeNode.typeName.name)
      )
    }

    if (typeNode.type === "TSIntersectionType") {
      return (typeNode.types ?? []).some(typeReferencesUI)
    }

    return false
  }

  function visitTypeAlias(node: { type: string }): void {
    if (node.type !== "TSTypeAliasDeclaration") return

    const alias = node as TSTypeAliasLike
    if (alias.id?.type !== "Identifier" || !alias.id.name) return
    if (!typeReferencesUI(alias.typeAnnotation)) return

    uiTypeNames.add(alias.id.name)
  }

  function visitVariableDeclarator(node: VariableDeclarator): void {
    if (node.id.type !== "Identifier") return
    if (
      node.init?.type !== "ArrowFunctionExpression" &&
      node.init?.type !== "FunctionExpression"
    )
      return

    const param = node.init.params[0] as AnnotatedParamLike | undefined
    if (param?.typeAnnotation?.type !== "TSTypeAnnotation") return
    if (!typeReferencesUI(param.typeAnnotation.typeAnnotation)) return

    components.add(node.id.name)
  }

  function matchesJSXName(node: JSXTagNameExpression): boolean {
    return node.type === "JSXIdentifier" && components.has(node.name)
  }

  return {
    matchesJSXName,
    visitImport,
    visitTypeAlias,
    visitVariableDeclarator,
  }
}
