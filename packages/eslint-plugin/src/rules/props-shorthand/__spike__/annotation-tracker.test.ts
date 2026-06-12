import type { ImportDeclaration, VariableDeclarator } from "estree-jsx"
import { createAnnotationTracker } from "./annotation-tracker"
import { findElement, parseFixture, walk } from "./helpers"

const setup = (code: string) => {
  const { ast, elements } = parseFixture(code)
  const tracker = createAnnotationTracker(["@yamada-ui/react"])

  walk(ast, (node) => {
    if (node.type === "ImportDeclaration") {
      tracker.visitImport(node as ImportDeclaration)
    }
    if (node.type === "TSTypeAliasDeclaration") {
      tracker.visitTypeAlias(node)
    }
    if (node.type === "VariableDeclarator") {
      tracker.visitVariableDeclarator(node as VariableDeclarator)
    }
  })

  return { elements, tracker }
}

describe("case C: wrapper annotated with a UI props type via pure AST", () => {
  test("matches wrapper whose param is annotated with BoxProps imported from @yamada-ui/react", () => {
    const { elements, tracker } = setup(`
      import { Box, type BoxProps } from "@yamada-ui/react"
      const MyBox = (props: BoxProps) => <Box {...props} />
      const App = () => <MyBox margin={1} />
    `)
    const element = findElement(elements, "MyBox")
    expect(tracker.matchesJSXName(element.name)).toBe(true)
  })

  test("matches wrapper with destructured param annotated with BoxProps", () => {
    const { elements, tracker } = setup(`
      import { Box, type BoxProps } from "@yamada-ui/react"
      const MyBox = ({ children, ...rest }: BoxProps) => <Box {...rest}>{children}</Box>
      const App = () => <MyBox margin={1} />
    `)
    const element = findElement(elements, "MyBox")
    expect(tracker.matchesJSXName(element.name)).toBe(true)
  })

  test("does not match wrapper annotated with a local non-UI props type", () => {
    const { elements, tracker } = setup(`
      interface FooProps { margin?: number }
      const Foo = (props: FooProps) => null
      const App = () => <Foo margin={1} />
    `)
    const element = findElement(elements, "Foo")
    expect(tracker.matchesJSXName(element.name)).toBe(false)
  })
})

describe("case D: props type composed by intersection via pure AST", () => {
  test("matches wrapper whose props type intersects BoxProps in the same file", () => {
    const { elements, tracker } = setup(`
      import { Box, type BoxProps } from "@yamada-ui/react"
      type MyProps = BoxProps & { foo: string }
      const MyBox = (props: MyProps) => <Box {...props} />
      const App = () => <MyBox margin={1} />
    `)
    const element = findElement(elements, "MyBox")
    expect(tracker.matchesJSXName(element.name)).toBe(true)
  })

  test("matches wrapper through a two-step alias chain", () => {
    const { elements, tracker } = setup(`
      import { Box, type BoxProps } from "@yamada-ui/react"
      type BaseProps = BoxProps & { foo: string }
      type MyProps = BaseProps & { bar: string }
      const MyBox = (props: MyProps) => <Box {...props} />
      const App = () => <MyBox margin={1} />
    `)
    const element = findElement(elements, "MyBox")
    expect(tracker.matchesJSXName(element.name)).toBe(true)
  })

  test("does not match intersection of local non-UI types", () => {
    const { elements, tracker } = setup(`
      type AProps = { margin?: number }
      type MyProps = AProps & { foo: string }
      const Foo = (props: MyProps) => null
      const App = () => <Foo margin={1} />
    `)
    const element = findElement(elements, "Foo")
    expect(tracker.matchesJSXName(element.name)).toBe(false)
  })
})

describe("genuine boundary: cases pure AST cannot resolve", () => {
  test("cannot detect wrapper whose props type is only inferred from a HOC return type", () => {
    const { elements, tracker } = setup(`
      import { Box } from "@yamada-ui/react"
      import { withTooltip } from "./hoc"
      const MyBox = withTooltip(Box)
      const App = () => <MyBox margin={1} />
    `)
    const element = findElement(elements, "MyBox")
    expect(tracker.matchesJSXName(element.name)).toBe(false)
  })

  test("cannot detect props type imported from another file without a file-graph extension", () => {
    const { elements, tracker } = setup(`
      import { Box } from "@yamada-ui/react"
      import type { MyProps } from "./types"
      const MyBox = (props: MyProps) => <Box {...props} />
      const App = () => <MyBox margin={1} />
    `)
    const element = findElement(elements, "MyBox")
    expect(tracker.matchesJSXName(element.name)).toBe(false)
  })
})
