import type { JSXOpeningElement, Program } from "estree-jsx"
import { parseForESLint } from "@typescript-eslint/parser"

export interface ParsedFixture {
  ast: Program
  elements: JSXOpeningElement[]
}

export function walk(
  node: unknown,
  visit: (node: { type: string }) => void,
): void {
  if (!node || typeof node !== "object") return
  if (Array.isArray(node)) {
    for (const child of node) walk(child, visit)
    return
  }

  const typed = node as { type?: string }
  if (typeof typed.type === "string") visit(typed as { type: string })

  for (const key of Object.keys(node)) {
    if (key === "parent") continue
    walk((node as Record<string, unknown>)[key], visit)
  }
}

export function parseFixture(code: string): ParsedFixture {
  const result = parseForESLint(code, {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    range: true,
    sourceType: "module",
  })

  const ast = result.ast as unknown as Program
  const elements: JSXOpeningElement[] = []

  walk(ast, (node) => {
    if (node.type === "JSXOpeningElement") {
      elements.push(node as JSXOpeningElement)
    }
  })

  return { ast, elements }
}

export function findElement(
  elements: JSXOpeningElement[],
  name: string,
): JSXOpeningElement {
  const element = elements.find(
    (el) => el.name.type === "JSXIdentifier" && el.name.name === name,
  )
  if (!element) throw new Error(`JSX element <${name}> not found in fixture`)
  return element
}
