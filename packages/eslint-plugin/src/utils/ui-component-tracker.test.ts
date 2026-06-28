import type {
  ImportDeclaration,
  JSXIdentifier,
  JSXMemberExpression,
  JSXNamespacedName,
  JSXOpeningElement,
  VariableDeclarator,
} from "estree-jsx"
import { parse } from "@typescript-eslint/parser"
import { createUIComponentTracker } from "./ui-component-tracker"

type JSXTagNameExpression =
  | JSXIdentifier
  | JSXMemberExpression
  | JSXNamespacedName

interface ParsedCode {
  imports: ImportDeclaration[]
  jsxNames: JSXTagNameExpression[]
  variableDeclarators: VariableDeclarator[]
}

const parseCode = (code: string): ParsedCode => {
  const ast = parse(code, {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  })

  const imports: ImportDeclaration[] = []
  const jsxNames: JSXTagNameExpression[] = []
  const variableDeclarators: VariableDeclarator[] = []

  const visit = (node: unknown): void => {
    if (!node || typeof node !== "object") return

    if (Array.isArray(node)) {
      for (const item of node) visit(item)

      return
    }

    const typed = node as { type?: string }
    if (typed.type === "ImportDeclaration") {
      imports.push(node as unknown as ImportDeclaration)
    } else if (typed.type === "JSXOpeningElement") {
      jsxNames.push((node as unknown as JSXOpeningElement).name)
    } else if (typed.type === "VariableDeclarator") {
      variableDeclarators.push(node as unknown as VariableDeclarator)
    }

    for (const key of Object.keys(node)) {
      if (key === "parent") continue
      visit((node as Record<string, unknown>)[key])
    }
  }
  visit(ast)

  return { imports, jsxNames, variableDeclarators }
}

const setupTracker = (
  code: string,
  sourcePackages: readonly string[] = ["@yamada-ui/react"],
) => {
  const { imports, jsxNames, variableDeclarators } = parseCode(code)
  const tracker = createUIComponentTracker(sourcePackages)
  for (const imp of imports) tracker.visitImport(imp)
  for (const decl of variableDeclarators) tracker.visitVariableDeclarator(decl)

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

  test("named imports: treats the `styled` factory as a namespace base", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { styled } from "@yamada-ui/react"
      const App = () => <styled.div />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  test("named imports: classifies the `styled` factory by its original exported name, not the alias", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { styled as s } from "@yamada-ui/react"
      const App = () => (
        <>
          <s.div />
          <styled.div />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(false)
  })

  test("named imports: registers multiple specifiers from a single import", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, HStack, styled } from "@yamada-ui/react"
      const App = () => (
        <>
          <Box />
          <HStack />
          <styled.div />
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

  test("styled wrapper: tracks a variable assigned from the styled factory", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, styled } from "@yamada-ui/react"
      const Wrapped = styled(Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  test("styled wrapper: tracks a variable via an aliased styled factory", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, styled as s } from "@yamada-ui/react"
      const Wrapped = s(Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  test("styled wrapper: tracks a variable wrapped through a namespace import", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const Wrapped = Y.styled(Y.Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  test("styled wrapper: tracks chained wrappers built on a previous wrapper", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, styled } from "@yamada-ui/react"
      const First = styled(Box)
      const Second = styled(First)
      const App = () => <Second />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
  })

  test("styled wrapper: ignores variables produced by an unknown factory", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box } from "@yamada-ui/react"
      const Wrapped = withSomething(Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  test("styled wrapper: ignores destructured assignments even if the initializer looks like styled()", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box, styled } from "@yamada-ui/react"
      const { Wrapped } = styled(Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  test("styled wrapper: ignores member access whose property is not `styled`", () => {
    const { jsxNames, tracker } = setupTracker(`
      import * as Y from "@yamada-ui/react"
      const Wrapped = Y.other(Y.Box)
      const App = () => <Wrapped />
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(false)
  })

  test("styled wrapper: tracks the result of styled() regardless of the wrapped argument", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { styled } from "@yamada-ui/react"
      const Internal = () => null
      const WrappedComponent = styled(Internal)
      const WrappedTag = styled("section")
      const App = () => (
        <>
          <WrappedComponent />
          <WrappedTag />
        </>
      )
    `)
    expect(tracker.matchesJSXName(jsxNames[0]!)).toBe(true)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(true)
  })

  test("custom function wrappers around UI components are not tracked", () => {
    const { jsxNames, tracker } = setupTracker(`
      import { Box } from "@yamada-ui/react"
      const MyBox = (props) => <Box {...props} />
      const App = () => <MyBox />
    `)
    expect(tracker.matchesJSXName(jsxNames[1]!)).toBe(false)
  })
})
