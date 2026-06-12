import * as fs from "node:fs"
import * as path from "node:path"
import { parseForESLint } from "@typescript-eslint/parser"
import { walk } from "./helpers"

export interface ReexportResolver {
  resolvesToUI: (
    importedName: string,
    importSource: string,
    fromFile: string,
  ) => boolean
}

const EXTENSIONS = [".ts", ".tsx", ".js", ".jsx"] as const

function resolveModuleFile(
  importSource: string,
  fromFile: string,
): null | string {
  const base = path.resolve(path.dirname(fromFile), importSource)

  const candidates = [
    base,
    ...EXTENSIONS.map((ext) => `${base}${ext}`),
    ...EXTENSIONS.map((ext) => path.join(base, `index${ext}`)),
  ]

  for (const candidate of candidates) {
    if (fs.existsSync(candidate) && fs.statSync(candidate).isFile()) {
      return candidate
    }
  }

  return null
}

interface Reexport {
  exportedName: null | string
  source: string
  sourceName: null | string
}

function collectReexports(filePath: string): Reexport[] {
  const code = fs.readFileSync(filePath, "utf8")
  const { ast } = parseForESLint(code, {
    ecmaFeatures: { jsx: true },
    ecmaVersion: "latest",
    sourceType: "module",
  })

  const reexports: Reexport[] = []

  walk(ast, (node) => {
    if (node.type === "ExportAllDeclaration") {
      const decl = node as {
        source: { value: unknown }
      }
      if (typeof decl.source.value === "string") {
        reexports.push({
          exportedName: null,
          source: decl.source.value,
          sourceName: null,
        })
      }
    }

    if (node.type === "ExportNamedDeclaration") {
      const decl = node as {
        source: null | { value: unknown }
        specifiers: {
          exported: { name?: string; type: string; value?: string }
          local: { name?: string; type: string; value?: string }
          type: string
        }[]
      }
      if (!decl.source || typeof decl.source.value !== "string") return

      for (const spec of decl.specifiers) {
        if (spec.type !== "ExportSpecifier") continue

        const exportedName = spec.exported.name ?? spec.exported.value ?? null
        const sourceName = spec.local.name ?? spec.local.value ?? null

        reexports.push({
          exportedName,
          source: decl.source.value,
          sourceName,
        })
      }
    }
  })

  return reexports
}

export function createReexportResolver(
  sourcePackages: readonly string[],
): ReexportResolver {
  function resolve(
    importedName: string,
    importSource: string,
    fromFile: string,
    visited: Set<string>,
  ): boolean {
    if (sourcePackages.includes(importSource)) return true
    if (!importSource.startsWith(".")) return false

    const moduleFile = resolveModuleFile(importSource, fromFile)
    if (!moduleFile || visited.has(moduleFile)) return false
    visited.add(moduleFile)

    for (const reexport of collectReexports(moduleFile)) {
      if (reexport.exportedName === null) {
        if (resolve(importedName, reexport.source, moduleFile, visited)) {
          return true
        }
      } else if (
        reexport.exportedName === importedName &&
        reexport.sourceName
      ) {
        if (
          resolve(reexport.sourceName, reexport.source, moduleFile, visited)
        ) {
          return true
        }
      }
    }

    return false
  }

  return {
    resolvesToUI: (importedName, importSource, fromFile) =>
      resolve(importedName, importSource, fromFile, new Set()),
  }
}
