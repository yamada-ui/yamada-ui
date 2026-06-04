import type {
  JSXIdentifier,
  JSXMemberExpression,
  JSXNamespacedName,
  JSXOpeningElement,
} from "estree-jsx"
import type * as TS from "typescript"
import { createRequire } from "node:module"

type JSXTagNameExpression =
  | JSXIdentifier
  | JSXMemberExpression
  | JSXNamespacedName

interface ParserServicesLike {
  esTreeNodeToTSNodeMap?: {
    get(key: unknown): TS.Node | undefined
  } | null
  program?: null | TS.Program
}

export interface TypedComponentMatcher {
  matchesJSXElement: (node: JSXOpeningElement) => boolean
}

const requireFromHere = createRequire(import.meta.url)

let cachedTs: typeof TS | null = null

function getTypeScript(): typeof TS {
  if (!cachedTs) {
    cachedTs = requireFromHere("typescript") as typeof TS
  }
  return cachedTs
}

const YAMADA_UI_PATH_MARKERS = [
  "@yamada-ui/react",
  "/packages/react/",
  "@workspaces/ui",
  "/workspaces/ui/",
] as const

const MAX_INSPECTED_PROPERTIES = 20

function fileNameMatchesYamadaUI(fileName: string): boolean {
  for (const marker of YAMADA_UI_PATH_MARKERS) {
    if (fileName.includes(marker)) return true
  }
  return false
}

function symbolIsFromYamadaUI(symbol: TS.Symbol | undefined): boolean {
  if (!symbol) return false

  const declarations = symbol.getDeclarations()
  if (!declarations) return false

  for (const decl of declarations) {
    if (fileNameMatchesYamadaUI(decl.getSourceFile().fileName)) return true
  }

  return false
}

function getRightmostIdentifier(
  node: JSXTagNameExpression,
): JSXIdentifier | null {
  if (node.type === "JSXIdentifier") return node
  if (node.type === "JSXMemberExpression") {
    return node.property.type === "JSXIdentifier" ? node.property : null
  }

  return null
}

function getLeftmostIdentifier(
  node: JSXTagNameExpression,
): JSXIdentifier | null {
  if (node.type === "JSXIdentifier") return node
  if (node.type === "JSXMemberExpression") {
    let object: JSXMemberExpression["object"] = node.object
    while (object.type === "JSXMemberExpression") {
      object = object.object
    }

    return object.type === "JSXIdentifier" ? object : null
  }

  return null
}

export function createTypedComponentMatcher(
  parserServices: ParserServicesLike | undefined,
): null | TypedComponentMatcher {
  if (!parserServices?.program || !parserServices.esTreeNodeToTSNodeMap) {
    return null
  }

  const program = parserServices.program
  const tsNodeMap = parserServices.esTreeNodeToTSNodeMap
  const checker = program.getTypeChecker()

  function resolveAlias(symbol: TS.Symbol): TS.Symbol {
    if ((symbol.flags & getTypeScript().SymbolFlags.Alias) === 0) return symbol
    try {
      return checker.getAliasedSymbol(symbol)
    } catch {
      return symbol
    }
  }

  function typeSymbolMatches(type: TS.Type): boolean {
    if (symbolIsFromYamadaUI(type.aliasSymbol)) return true
    if (symbolIsFromYamadaUI(type.getSymbol())) return true
    return false
  }

  function typeHasYamadaUIShape(
    type: TS.Type,
    location: TS.Node,
    visited: WeakSet<TS.Type>,
  ): boolean {
    if (visited.has(type)) return false
    visited.add(type)

    if (typeSymbolMatches(type)) return true

    if (type.isIntersection()) {
      for (const sub of type.types) {
        if (typeHasYamadaUIShape(sub, location, visited)) return true
      }
    }

    const interfaceType = type as TS.InterfaceType
    if (typeof interfaceType.getBaseTypes === "function") {
      const baseTypes = interfaceType.getBaseTypes()
      if (baseTypes) {
        for (const base of baseTypes) {
          if (typeHasYamadaUIShape(base, location, visited)) return true
        }
      }
    }

    for (const sig of type.getCallSignatures()) {
      const params = sig.getParameters()
      const propsParam = params[0]
      if (!propsParam) continue

      const propsType = checker.getTypeOfSymbolAtLocation(propsParam, location)
      if (propsTypeMatches(propsType)) return true
    }

    const properties = type.getProperties()
    let inspected = 0
    for (const prop of properties) {
      if (inspected >= MAX_INSPECTED_PROPERTIES) break
      inspected++
      if (symbolIsFromYamadaUI(prop)) return true
    }

    return false
  }

  function propsTypeMatches(type: TS.Type): boolean {
    if (typeSymbolMatches(type)) return true

    if (type.isIntersection()) {
      for (const sub of type.types) {
        if (typeSymbolMatches(sub)) return true
      }
    }

    const interfaceType = type as TS.InterfaceType
    if (typeof interfaceType.getBaseTypes === "function") {
      const baseTypes = interfaceType.getBaseTypes()
      if (baseTypes) {
        for (const base of baseTypes) {
          if (typeSymbolMatches(base)) return true
        }
      }
    }

    const properties = type.getProperties()
    let inspected = 0
    for (const prop of properties) {
      if (inspected >= MAX_INSPECTED_PROPERTIES) break
      inspected++
      if (symbolIsFromYamadaUI(prop)) return true
    }

    return false
  }

  function matchesJSXElement(node: JSXOpeningElement): boolean {
    const tagName = node.name as JSXTagNameExpression

    if (
      tagName.type === "JSXIdentifier" &&
      /^[a-z]/.test(tagName.name) &&
      !tagName.name.includes("-")
    ) {
      return false
    }

    const rightmost = getRightmostIdentifier(tagName)
    if (!rightmost) return false

    const tsNode = tsNodeMap.get(rightmost)
    if (!tsNode) return false

    const tagSymbol = checker.getSymbolAtLocation(tsNode)
    if (tagSymbol) {
      const resolved = resolveAlias(tagSymbol)
      if (symbolIsFromYamadaUI(resolved)) return true
    }

    if (tagName.type === "JSXMemberExpression") {
      const leftmost = getLeftmostIdentifier(tagName)
      if (leftmost) {
        const leftTsNode = tsNodeMap.get(leftmost)
        if (leftTsNode) {
          const leftSymbol = checker.getSymbolAtLocation(leftTsNode)
          if (leftSymbol) {
            const resolvedLeft = resolveAlias(leftSymbol)
            if (symbolIsFromYamadaUI(resolvedLeft)) return true
          }
        }
      }
    }

    const type = checker.getTypeAtLocation(tsNode)

    return typeHasYamadaUIShape(type, tsNode, new WeakSet())
  }

  return { matchesJSXElement }
}
