import { Command } from "commander"
import ora from "ora"
import { fetchRegistry } from "../../utils"
import { printSource, printTree } from "./print-view"

interface Options {
  tag?: string
}

export const view = new Command("view")
  .description(
    "inspect registry item source files before or without installing them",
  )
  .argument("<item>", "the name of the registry item to view (e.g., button)")
  .argument("[file]", "specific file to view (e.g., button.tsx)")
  .option("-t, --tag <name>", "tag for the registries (e.g. dev, next).")
  .action(async (item: string, file: string | undefined, { tag }: Options) => {
    const spinner = ora()

    try {
      spinner.start(`Fetching registry item '${item}'`)

      const { sources } = await fetchRegistry(item, { tag })

      if (sources.length === 0) {
        throw new Error(
          `Registry item '${item}' not found or has no source files.`,
        )
      }

      if (file) {
        const targetSource = sources.find((source) => source.name === file)

        if (!targetSource) {
          throw new Error(
            `File '${file}' not found in registry item '${item}'. Available files are: ${sources.map((source) => source.name).join(", ")}`,
          )
        }

        if (!targetSource.content) {
          throw new Error(`No readable content found for file '${file}'.`)
        }

        spinner.succeed(`Fetched registry item '${item}'`)
        printSource(file, targetSource.content)
      } else {
        spinner.succeed(`Fetched registry item '${item}'`)
        printTree(item, sources)
      }
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }
    }
  })
