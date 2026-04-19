import type { Source } from "../../index.type"
import c from "picocolors"

interface Tree {
  [key: string]: null | Tree
}

function buildTree(sources: Source[]): Tree {
  const tree: Tree = {}

  sources.forEach((source) => {
    const parts = source.name.split("/")
    let current = tree

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i]

      if (!part) continue

      if (i === parts.length - 1) {
        current[part] = null
      } else {
        current[part] = current[part] || {}
        current = current[part] as Tree
      }
    }
  })

  return tree
}

function printTreeNode(node: Tree, prefix = "") {
  const keys = Object.keys(node)

  keys.forEach((key, index) => {
    const isLast = index === keys.length - 1
    const connector = isLast ? "└─" : "├─"
    const isDir = node[key] !== null

    console.log(
      `${prefix}${c.dim(connector)} ${isDir ? c.bold(key) : c.green(key)}`,
    )

    if (isDir) {
      const newPrefix = prefix + (isLast ? "   " : c.dim("│  "))
      printTreeNode(node[key] as Tree, newPrefix)
    }
  })
}

export function printTree(component: string, sources: Source[]) {
  console.log(`\n${c.blue("Directory listing for:")} ${c.bold(component)}\n`)
  printTreeNode(buildTree(sources), "  ")
  console.log()
}

export function printSource(file: string, content: string) {
  console.log(`\n${c.dim("---")} ${c.bold(c.green(file))} ${c.dim("---")}\n`)
  console.log(content)
  console.log(`\n${c.dim("--- End of file ---")}\n`)
}
