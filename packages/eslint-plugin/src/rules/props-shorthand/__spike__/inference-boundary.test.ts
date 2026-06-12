import type { JSXOpeningElement } from "estree-jsx"
import type { ImportDeclaration, VariableDeclarator } from "estree-jsx"
import * as path from "node:path"
import { fileURLToPath } from "node:url"
import { parseForESLint } from "@typescript-eslint/parser"
import * as ts from "typescript"
import { createTypedComponentMatcher } from "../typed-component-matcher"
import { createAnnotationTracker } from "./annotation-tracker"
import { createFactoryTracker } from "./factory-tracker"
import { findElement, walk } from "./helpers"

const FIXTURE_DIR = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  "..",
  "__fixtures__",
)
const TSCONFIG_PATH = path.join(FIXTURE_DIR, "tsconfig.json")

const HOC_FILE = path.join(FIXTURE_DIR, "hoc.ts")
const APP_FILE = path.join(FIXTURE_DIR, "test.tsx")

const HOC_CODE = `
import type { BoxProps } from "@yamada-ui/react"
interface TooltipComponent {
  (props: BoxProps): unknown
}
export function withTooltip(component: unknown): TooltipComponent {
  return component as TooltipComponent
}
`

const APP_CODE = `
import { Box } from "@yamada-ui/react"
import { withTooltip } from "./hoc"
const MyBox = withTooltip(Box)
const App = () => <MyBox margin={1} />
`

const buildProgram = (files: Map<string, string>): ts.Program => {
  const configResult = ts.readConfigFile(TSCONFIG_PATH, ts.sys.readFile)
  const parsed = ts.parseJsonConfigFileContent(
    configResult.config,
    ts.sys,
    FIXTURE_DIR,
  )
  const host = ts.createCompilerHost(parsed.options)
  const originalReadFile = host.readFile.bind(host)
  const originalFileExists = host.fileExists.bind(host)
  host.readFile = (name) => files.get(name) ?? originalReadFile(name)
  host.fileExists = (name) => files.has(name) || originalFileExists(name)
  return ts.createProgram([...files.keys()], parsed.options, host)
}

describe("boundary: HOC-inferred wrapper requires the TS Compiler API", () => {
  test("pure AST trackers cannot detect the wrapper", () => {
    const { ast } = parseForESLint(APP_CODE, {
      ecmaFeatures: { jsx: true },
      ecmaVersion: "latest",
      sourceType: "module",
    })

    const factoryTracker = createFactoryTracker(["@yamada-ui/react"])
    const annotationTracker = createAnnotationTracker(["@yamada-ui/react"])
    const elements: JSXOpeningElement[] = []

    walk(ast, (node) => {
      if (node.type === "ImportDeclaration") {
        factoryTracker.visitImport(node as ImportDeclaration)
        annotationTracker.visitImport(node as ImportDeclaration)
      }
      if (node.type === "TSTypeAliasDeclaration") {
        annotationTracker.visitTypeAlias(node)
      }
      if (node.type === "VariableDeclarator") {
        factoryTracker.visitVariableDeclarator(node as VariableDeclarator)
        annotationTracker.visitVariableDeclarator(node as VariableDeclarator)
      }
      if (node.type === "JSXOpeningElement") {
        elements.push(node as unknown as JSXOpeningElement)
      }
    })

    const element = findElement(elements, "MyBox")
    expect(factoryTracker.matchesJSXName(element.name)).toBe(false)
    expect(annotationTracker.matchesJSXName(element.name)).toBe(false)
  })

  test("the typed matcher resolves the wrapper through the inferred return type", () => {
    const files = new Map([
      [APP_FILE, APP_CODE],
      [HOC_FILE, HOC_CODE],
    ])
    const program = buildProgram(files)
    const result = parseForESLint(APP_CODE, {
      ecmaFeatures: { jsx: true },
      ecmaVersion: "latest",
      filePath: APP_FILE,
      programs: [program],
      sourceType: "module",
    })

    const matcher = createTypedComponentMatcher(result.services)
    expect(matcher).not.toBeNull()

    const elements: JSXOpeningElement[] = []
    walk(result.ast, (node) => {
      if (node.type === "JSXOpeningElement") {
        elements.push(node as unknown as JSXOpeningElement)
      }
    })

    const element = findElement(elements, "MyBox")
    expect(matcher!.matchesJSXElement(element)).toBe(true)
  })
})
