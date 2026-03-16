import { Command } from "commander"
import fs from "fs"
import path from "path"
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
  .argument("[file]", "specific file to view or download (optional)")
  .option("-t, --tag <name>", "tag for the registries (e.g. dev, next).")
  .action(
    async (component: string, file: string | undefined, { tag }: Options) => {
      try {
        const registryData = (await fetchRegistry(component, { tag })) as any
        const sources = registryData.sources

        if (!sources || !Array.isArray(sources) || sources.length === 0) {
          throw new Error(
            `Component '${component}' not found or has no source files.`,
          )
        }

        if (file) {
          const targetFile = sources.find((f: any) => f.name === file)

          if (!targetFile) {
            console.error(
              c.red(
                `\nError: File '${file}' not found in component '${component}'.`,
              ),
            )
            console.log(
              `Available files are: ${sources.map((f: any) => f.name).join(", ")}\n`,
            )
            process.exit(1)
          }

          const targetPath = path.join(process.cwd(), file)
          fs.writeFileSync(targetPath, targetFile.content, "utf-8")

          console.log(
            `${c.green("✔")} Successfully downloaded ${c.bold(file)} from ${c.bold(component)} to your current directory.\n`,
          )
        } else {
          console.log(
            `\n${c.blue("Directory listing for:")} ${c.bold(component)}\n`,
          )

          interface Tree {
            [key: string]: null | Tree
          }
          const tree: Tree = {}

          sources.forEach((f: any) => {
            const parts = f.name.split("/")
            let current = tree
            for (let i = 0; i < parts.length; i++) {
              const part = parts[i]
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
        process.exit(1)
      }
    },
  )
