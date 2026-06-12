import type { ImportDeclaration, VariableDeclarator } from "estree-jsx"
import { createFactoryTracker } from "./factory-tracker"
import { findElement, parseFixture, walk } from "./helpers"

const setup = (code: string) => {
  const { ast, elements } = parseFixture(code)
  const tracker = createFactoryTracker(["@yamada-ui/react"])

  walk(ast, (node) => {
    if (node.type === "ImportDeclaration") {
      tracker.visitImport(node as ImportDeclaration)
    }
    if (node.type === "VariableDeclarator") {
      tracker.visitVariableDeclarator(node as VariableDeclarator)
    }
  })

  return { elements, tracker }
}

describe("case A: styled(Box) factory wrapper via pure AST", () => {
  test("matches component created by styled() imported from @yamada-ui/react", () => {
    const { elements, tracker } = setup(`
      import { Box, styled } from "@yamada-ui/react"
      const MyBox = styled(Box)
      const App = () => <MyBox margin={1} />
    `)
    const element = findElement(elements, "MyBox")
    expect(tracker.matchesJSXName(element.name)).toBe(true)
  })

  test("matches component created by aliased styled import", () => {
    const { elements, tracker } = setup(`
      import { Box, styled as ui } from "@yamada-ui/react"
      const MyBox = ui(Box)
      const App = () => <MyBox margin={1} />
    `)
    const element = findElement(elements, "MyBox")
    expect(tracker.matchesJSXName(element.name)).toBe(true)
  })

  test("matches component created by styled() with options call", () => {
    const { elements, tracker } = setup(`
      import { Box, styled } from "@yamada-ui/react"
      const MyBox = styled(Box, { base: { color: "primary" } })
      const App = () => <MyBox margin={1} />
    `)
    const element = findElement(elements, "MyBox")
    expect(tracker.matchesJSXName(element.name)).toBe(true)
  })

  test("does not match component created by a foreign factory", () => {
    const { elements, tracker } = setup(`
      import styled from "styled-components"
      const MyBox = styled.div\`\`
      const Other = styled("div")
      const App = () => <><MyBox margin={1} /><Other margin={1} /></>
    `)
    expect(tracker.matchesJSXName(findElement(elements, "MyBox").name)).toBe(
      false,
    )
    expect(tracker.matchesJSXName(findElement(elements, "Other").name)).toBe(
      false,
    )
  })

  test("does not match a plain variable holding a non-factory call", () => {
    const { elements, tracker } = setup(`
      import { Box, styled } from "@yamada-ui/react"
      const value = compute(Box)
      const App = () => <value.Item margin={1} />
    `)
    expect(tracker.matchesJSXName(elements[0]!.name)).toBe(false)
  })
})
