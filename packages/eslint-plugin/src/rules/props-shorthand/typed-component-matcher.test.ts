import type { JSXOpeningElement } from "estree-jsx"
import * as path from "node:path"
import { fileURLToPath } from "node:url"
import { parseForESLint } from "@typescript-eslint/parser"
import * as ts from "typescript"
import { createTypedComponentMatcher } from "./typed-component-matcher"

const FIXTURE_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "__fixtures__",
)
const TSCONFIG_PATH = path.join(FIXTURE_DIR, "tsconfig.json")

const buildProgram = (filePath: string, code: string): ts.Program => {
  const configResult = ts.readConfigFile(TSCONFIG_PATH, ts.sys.readFile)
  const parsed = ts.parseJsonConfigFileContent(
    configResult.config,
    ts.sys,
    FIXTURE_DIR,
  )
  const host = ts.createCompilerHost(parsed.options)
  const originalReadFile = host.readFile.bind(host)
  const originalFileExists = host.fileExists.bind(host)
  host.readFile = (name) => (name === filePath ? code : originalReadFile(name))
  host.fileExists = (name) =>
    name === filePath ? true : originalFileExists(name)
  return ts.createProgram([filePath], parsed.options, host)
}

const findJSXOpeningElements = (root: unknown): JSXOpeningElement[] => {
  const out: JSXOpeningElement[] = []
  const visit = (node: unknown): void => {
    if (!node || typeof node !== "object") return
    if (Array.isArray(node)) {
      node.forEach(visit)
      return
    }
    const typed = node as { type?: string }
    if (typed.type === "JSXOpeningElement") {
      out.push(node as unknown as JSXOpeningElement)
    }
    for (const key of Object.keys(node)) {
      if (key === "parent") continue
      visit((node as Record<string, unknown>)[key])
    }
  }
  visit(root)
  return out
}

const setup = (code: string) => {
  const filePath = path.join(FIXTURE_DIR, "test.tsx")
  const program = buildProgram(filePath, code)
  const result = parseForESLint(code, {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    filePath,
    programs: [program],
    sourceType: "module",
  })
  const matcher = createTypedComponentMatcher(result.services)
  const elements = findJSXOpeningElements(result.ast)
  return { elements, matcher }
}

describe("createTypedComponentMatcher", () => {
  test("returns null when parserServices is undefined", () => {
    expect(createTypedComponentMatcher(undefined)).toBeNull()
  })

  test("returns null when program is missing", () => {
    expect(
      createTypedComponentMatcher({
        esTreeNodeToTSNodeMap: { get: () => undefined },
      }),
    ).toBeNull()
  })

  test("matches direct import from @yamada-ui/react", () => {
    const { elements, matcher } = setup(`
      import { Box } from "@yamada-ui/react"
      const App = () => <Box />
    `)
    expect(matcher).not.toBeNull()
    expect(matcher!.matchesJSXElement(elements[0]!)).toBe(true)
  })

  test("matches wrapper component whose props type extends Yamada UI", () => {
    const { elements, matcher } = setup(`
      import { Box, type BoxProps } from "@yamada-ui/react"
      const MyBox = (props: BoxProps) => <Box {...props} />
      const App = () => <MyBox />
    `)
    expect(matcher).not.toBeNull()
    const myBoxElement = elements.find(
      (el) => el.name.type === "JSXIdentifier" && el.name.name === "MyBox",
    )
    expect(myBoxElement).toBeDefined()
    expect(matcher!.matchesJSXElement(myBoxElement!)).toBe(true)
  })

  test("matches styled.div member access", () => {
    const { elements, matcher } = setup(`
      import { styled } from "@yamada-ui/react"
      const App = () => <styled.div />
    `)
    expect(matcher).not.toBeNull()
    expect(matcher!.matchesJSXElement(elements[0]!)).toBe(true)
  })

  test("does not match plain function component without Yamada UI props", () => {
    const { elements, matcher } = setup(`
      interface FooProps { margin?: number }
      const Foo = (_props: FooProps) => null
      const App = () => <Foo />
    `)
    expect(matcher).not.toBeNull()
    const fooElement = elements.find(
      (el) => el.name.type === "JSXIdentifier" && el.name.name === "Foo",
    )
    expect(fooElement).toBeDefined()
    expect(matcher!.matchesJSXElement(fooElement!)).toBe(false)
  })

  test("does not match native HTML elements", () => {
    const { elements, matcher } = setup(`
      const App = () => <div />
    `)
    expect(matcher).not.toBeNull()
    expect(matcher!.matchesJSXElement(elements[0]!)).toBe(false)
  })

  test("does not match components from non-Yamada UI packages", () => {
    const { elements, matcher } = setup(`
      const App = () => <SomeUnknown />
    `)
    expect(matcher).not.toBeNull()
    expect(matcher!.matchesJSXElement(elements[0]!)).toBe(false)
  })
})
