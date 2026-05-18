import type { TSESTree } from "@typescript-eslint/utils"
import { parse } from "@typescript-eslint/parser"
import { describe, expect, test } from "vitest"
import { createUIComponentTracker } from "./ui-component-tracker"

interface ParsedCode {
  imports: TSESTree.ImportDeclaration[]
  jsxNames: TSESTree.JSXTagNameExpression[]
}

const parseCode = (code: string): ParsedCode => {
  const ast = parse(code, {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  })

  const imports: TSESTree.ImportDeclaration[] = []
  const jsxNames: TSESTree.JSXTagNameExpression[] = []

  const visit = (node: unknown): void => {
    if (!node || typeof node !== "object") return

    if (Array.isArray(node)) {
      for (const item of node) visit(item)
      return
    }

    const typed = node as { type?: string }
    if (typed.type === "ImportDeclaration") {
      imports.push(node as TSESTree.ImportDeclaration)
    } else if (typed.type === "JSXOpeningElement") {
      jsxNames.push((node as TSESTree.JSXOpeningElement).name)
    }

    for (const key in node) {
      if (key === "parent") continue
      visit((node as Record<string, unknown>)[key])
    }
  }
  visit(ast)
  return { imports, jsxNames }
}

const setupTracker = (
  code: string,
  sourcePackages: readonly string[] = ["@yamada-ui/react"],
) => {
  const { imports, jsxNames } = parseCode(code)
  const tracker = createUIComponentTracker(sourcePackages)
  for (const imp of imports) tracker.visitImport(imp)
  return { jsxNames, tracker }
}

describe("createUIComponentTracker", () => {
  test("named imports: tracks a bare component imported from sourcePackages", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box } from "@yamada-ui/react"
      const App = () => <Box />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  test("named imports: registers under the local alias and ignores the original name", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box as B } from "@yamada-ui/react"
      const App = () => (
        <>
          <B />
          <Box />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(false)
  })

  test("named imports: treats the `ui` factory as a namespace base", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { ui } from "@yamada-ui/react"
      const App = () => <ui.div />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  test("named imports: classifies the `ui` factory by its original exported name, not the alias", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { ui as u } from "@yamada-ui/react"
      const App = () => (
        <>
          <u.div />
          <ui.div />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(false)
  })

  test("named imports: registers multiple specifiers from a single import", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, HStack, ui } from "@yamada-ui/react"
      const App = () => (
        <>
          <Box />
          <HStack />
          <ui.div />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[2]!)).toBe(true)
  })

  test("namespace imports: tracks `import * as Y` for member-access JSX", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const App = () => <Y.Box />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  test("namespace imports: resolves the leftmost base in deeply nested member access", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const App = () => <Y.Foo.Bar />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  test("namespace imports: does not match a bare identifier whose name was registered as a namespace", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const App = () => <Y />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  test("default imports: registers default imports as a namespace base", () => {
    const { jsxNames, tracker } = setupTracker(`
      import YamadaUI from "@yamada-ui/react"
      const App = () => (
        <>
          <YamadaUI.Box />
          <YamadaUI />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(false)
  })

  test("ignores imports from packages outside sourcePackages", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box } from "@some/other-lib"
      const App = () => <Box />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  test("ignores native HTML elements", () => {
    const { jsxNames, tracker } = setupTracker(`
      const App = () => <div />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  test("ignores side-effect-only imports (no specifiers)", () => {
    const { jsxNames, tracker } = setupTracker(`
      import "@yamada-ui/react"
      const App = () => <Box />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  test("sourcePackages array: matches imports from any of the listed packages", () => {
    const { jsxNames, tracker } = setupTracker(
      `
        import { Box } from "@yamada-ui/react"
        import { Card } from "@yamada-ui/react/components"
        const App = () => (
          <>
            <Box />
            <Card />
          </>
        )
      `,
      ["@yamada-ui/react", "@yamada-ui/react/components"],
    )
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(true)
  })
})
