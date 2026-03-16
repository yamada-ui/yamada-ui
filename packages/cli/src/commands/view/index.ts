import { Command } from "commander"
import fs from "fs"
import path from "path"
import c from "picocolors"
import { fetchRegistry } from "../../utils"

export const view = new Command()
  .name("view")
  .description(
    "inspect component source files before or without installing them",
  )
  .argument("<component>", "the name of the component to view (e.g., button)")
  .argument("[file]", "specific file to view or download (optional)")
  .action(async (component: string, file?: string) => {
    try {
      const registryData = (await fetchRegistry(component)) as any
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

        sources.forEach((f: any) => {
          console.log(`  ${c.dim("├─")} ${c.green(f.name)}`)
        })
        console.log()
      }
    } catch (error) {
      console.error(c.red(`\nFailed to view component: ${error}`))
      process.exit(1)
    }
  })
