import type { ReadableStream } from "stream/web"
import type { ReadEntry } from "tar"
import type {
  ImportDeclaration,
  Node,
  SourceFile,
  TransformerFactory,
} from "typescript"
import * as p from "@clack/prompts"
import c from "chalk"
import dns from "dns"
import { existsSync } from "fs"
import { mkdir, readFile, writeFile } from "fs/promises"
import { Readable } from "node:stream"
import { pipeline } from "node:stream/promises"
import path from "path"
import { t } from "tar"
import {
  createPrinter,
  createSourceFile,
  factory,
  isImportDeclaration,
  isNamedImports,
  NewLineKind,
  ScriptTarget,
  transform,
  visitEachChild,
  visitNode,
} from "typescript"
import { isWriteable, prettier } from "../../utils"

const ORG_NAME = "yamada-ui"
const REPO_NAME = "yamada-ui"
const DEFAULT_BRANCH_NAME = "v1"

const isOnline = async (): Promise<boolean> => {
  return new Promise((resolve) => {
    dns.lookup("github.com", (err) => {
      if (err && err.code === "ENOTFOUND") {
        resolve(false)
      } else {
        resolve(true)
      }
    })
  })
}

const checkHasReact = async (cwd: string) => {
  try {
    const packageJson = await readFile(path.join(cwd, "package.json"), "utf-8")

    const { dependencies, devDependencies } = JSON.parse(packageJson)

    return (
      !!dependencies?.["@yamada-ui/react"] ||
      !!devDependencies?.["@yamada-ui/react"]
    )
  } catch {
    return false
  }
}

const getSource = async (branch: string) => {
  if (!(await isOnline())) {
    throw new Error(
      "No internet connection, please check your connection and try again.",
    )
  }

  const url = `https://codeload.github.com/${ORG_NAME}/${REPO_NAME}/tar.gz/${branch}`

  const { body } = await fetch(url)

  if (!body) throw new Error(`Failed to download: ${url}`)

  return Readable.fromWeb(body as ReadableStream)
}

const getFileMap = async (cwd: string, branch: string) => {
  const source = await getSource(branch)

  const fileMap = new Map<string, string>()

  const normalizedBranch = branch.startsWith("v") ? branch.slice(1) : branch
  const targetPath = `${REPO_NAME}-${normalizedBranch}/packages/theme/src`

  const filter = (path: string) => {
    return path.startsWith(targetPath)
  }

  const onReadEntry = (entry: ReadEntry) => {
    if (entry.type !== "Directory") {
      const filePath = entry.path.replace(`${targetPath}/`, "")

      let content = ""

      entry.on("data", (chunk) => {
        content += chunk.toString()
      })

      entry.on("end", () => {
        fileMap.set(filePath, content)
      })
    }
  }

  await pipeline(
    source,
    t({
      cwd,
      filter,
      newer: true,
      strip: 4,
      onReadEntry,
    }),
  )

  return fileMap
}

const transformSourceFile = (sourceFile: SourceFile) => {
  const ImportDeclarations: ImportDeclaration[] = []
  const ImportTypeDeclarations: ImportDeclaration[] = []

  const transformer: TransformerFactory<Node> = (context) => (sourceFile) => {
    const visitor = (node: Node): Node => {
      if (isImportDeclaration(node)) {
        const moduleSpecifier = node.moduleSpecifier.getText().slice(1, -1)

        if (moduleSpecifier.startsWith("@yamada-ui/")) {
          if (node.importClause?.isTypeOnly) {
            ImportTypeDeclarations.push(node)
          } else {
            ImportDeclarations.push(node)
          }

          return factory.createEmptyStatement()
        }
      }

      return visitEachChild(node, visitor, context)
    }

    return visitNode(sourceFile, visitor)
  }

  const { transformed } = transform(sourceFile, [transformer])
  const transformedSourceFile = transformed[0] as SourceFile

  return { ImportDeclarations, ImportTypeDeclarations, transformedSourceFile }
}

const createImportDeclaration = (
  isTypeOnly: boolean,
  declarations: ImportDeclaration[],
) => {
  const elements = declarations.flatMap(({ importClause }) =>
    importClause?.namedBindings && isNamedImports(importClause.namedBindings)
      ? importClause.namedBindings.elements
      : [],
  )

  const namedBindings = factory.createNamedImports(elements)

  const importClause = factory.createImportClause(
    isTypeOnly,
    undefined,
    namedBindings,
  )

  return factory.createImportDeclaration(
    undefined,
    importClause,
    factory.createStringLiteral("@yamada-ui/react"),
  )
}

const replaceContent = (content: string) => {
  const sourceFile = createSourceFile(
    "temp.ts",
    content,
    ScriptTarget.Latest,
    true,
  )

  const printer = createPrinter({ newLine: NewLineKind.LineFeed })

  const { ImportDeclarations, ImportTypeDeclarations, transformedSourceFile } =
    transformSourceFile(sourceFile)

  const statements = [...transformedSourceFile.statements]

  if (ImportTypeDeclarations.length) {
    const newImportTypeDeclarations = createImportDeclaration(
      true,
      ImportTypeDeclarations,
    )

    statements.unshift(newImportTypeDeclarations)
  }

  if (ImportDeclarations.length) {
    const newImportDeclarations = createImportDeclaration(
      false,
      ImportDeclarations,
    )

    statements.unshift(newImportDeclarations)
  }

  const updatedSourceFile = factory.updateSourceFile(
    transformedSourceFile,
    statements,
  )

  let printedContent = printer.printFile(updatedSourceFile)

  printedContent = printedContent.replace(/^;$/gm, "")
  printedContent = printedContent.replace(/\s\n*(?=import)/g, "")
  printedContent = printedContent.replace(/(import .*\n)+(?!import)/, "$&\n")

  return printedContent
}

const replaceIndex = (content: string) => {
  const index = content.indexOf("export const baseTheme")

  content = content.slice(0, index)
  content = content.replace(/export const baseTheme/, "export const theme")
  content = content.replace(/\nimport { config } from ".\/config"/, "")
  content += "\nexport { config } from './config'"

  return content
}

const generateTheme = async (
  outPath: string,
  fileMap: Map<string, string>,
  isReactReplace: boolean,
  isForceReplace: boolean,
) => {
  if (!(await isWriteable(path.dirname(outPath)))) {
    throw new Error(
      "The provided path is not writable, please check folder permissions and try again. It is likely you do not have write permissions for this folder.",
    )
  }

  await mkdir(outPath, { recursive: true })

  await Promise.all(
    [...fileMap.entries()].map(async ([filePath, _content]) => {
      const targetPath = path.join(outPath, filePath)

      let content = _content

      if (filePath === "index.ts") {
        content = replaceIndex(content)
      } else {
        if (isReactReplace) content = replaceContent(content)
      }

      const formattedContent = await prettier(content)

      try {
        if (!isForceReplace && existsSync(targetPath)) return

        await writeFile(targetPath, formattedContent, "utf-8")
      } catch (e) {
        if (e instanceof Error && "code" in e && e.code === "ENOENT") {
          const dirPath = path.dirname(targetPath)

          await mkdir(dirPath, { recursive: true })

          if (!isForceReplace && existsSync(targetPath)) return

          await writeFile(targetPath, formattedContent, "utf-8")
        }
      }
    }),
  )
}

interface Options {
  branch?: string
  cwd?: string
  replace?: boolean
}

export const actionTheme = async (
  _outPath: string,
  { branch = DEFAULT_BRANCH_NAME, cwd, replace = false }: Options,
) => {
  p.intro(c.magenta(`Generating Yamada UI theme`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()
    cwd ??= path.resolve()
    const outPath = path.join(cwd, _outPath)

    s.start(`Checking "package.json"`)

    const hasReact = await checkHasReact(cwd)

    s.stop(`Checked "package.json"`)

    s.start(`Downloading the theme`)

    const fileMap = await getFileMap(outPath, branch)

    s.stop(`Downloaded the theme`)

    s.start(`Writing the theme "${outPath}"`)

    await generateTheme(outPath, fileMap, hasReact, replace)

    s.stop(`Wrote the theme`)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(`${c.green(`Done`)} in ${c.dim(`${duration}s`)}\n`)
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}
