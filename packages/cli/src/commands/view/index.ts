import type { Source } from "../../index.type"
import { Command } from "commander"
import c from "picocolors"
import { fetchRegistry } from "../../utils"

interface Options {
  tag?: string
}

export const view = new Command()
  .name("view")
  .description(
    "inspect component source files before or without installing them",
  )
  .argument("<component>", "the name of the component to view (e.g., button)")
  .argument("[file]", "specific file to view (optional)")
  .option("-t, --tag <name>", "tag for the registries (e.g. dev, next).")
  .action(
    async (component: string, file: string | undefined, { tag }: Options) => {
      try {
        const registryData = await fetchRegistry(component, { tag })
        const sources = registryData.sources as Source[]
        if (sources.length === 0) {
          throw new Error(
            `Component '${component}' not found or has no source files.`,
          )
        }

        if (file) {
          const targetFile = sources.find((f: Source) => f.name === file)

          if (!targetFile) {
            console.error(
              c.red(
                `\nError: File '${file}' not found in component '${component}'.`,
              ),
            )
            console.log(
              `Available files are: ${sources.map((f: Source) => f.name).join(", ")}\n`,
            )
            return process.exit(1)
          }

          if (!targetFile.content) {
            console.error(
              c.red(`\nError: No readable content found for file '${file}'.`),
            )
            return process.exit(1)
          }

          console.log(
            `\n${c.dim("---")} ${c.bold(c.green(file))} ${c.dim("---")}\n`,
          )
          console.log(targetFile.content)
          console.log(`\n${c.dim("--- End of file ---")}\n`)
        } else {
          console.log(
            `\n${c.blue("Directory listing for:")} ${c.bold(component)}\n`,
          )

          interface Tree {
            [key: string]: null | Tree
          }
          const tree: Tree = {}

          sources.forEach((f: Source) => {
            const parts = f.name.split("/")
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

          const printTree = (node: Tree, prefix = "") => {
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
                printTree(node[key] as Tree, newPrefix)
              }
            })
          }

          printTree(tree, "  ")
          console.log()
        }
      } catch (error) {
        console.error(c.red(`\nFailed to view component: ${error}`))
        return process.exit(1)
      }
    },
  )
