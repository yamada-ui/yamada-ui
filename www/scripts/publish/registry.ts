import type { RegistryTag } from "@/utils/registry"
import { Command, Option } from "commander"
import { glob, readFile } from "node:fs/promises"
import path from "node:path"
import ora from "ora"
import c from "picocolors"
import { publishRegistry, REGISTRY_TAGS } from "@/utils/registry"

interface Options {
  directory: string
  tag: RegistryTag
}

new Command()
  .addOption(
    new Option("-t, --tag <tag>", "registry channel")
      .choices(REGISTRY_TAGS)
      .default("latest"),
  )
  .requiredOption(
    "--directory <path>",
    "directory containing the generated registries",
  )
  .action(async ({ directory, tag }: Options) => {
    const spinner = ora()

    const start = process.hrtime.bigint()

    spinner.start(`Getting registries`)

    const cwd = path.resolve(directory)
    const files = []

    for await (const pathname of glob("**/*.json", { cwd })) {
      const content = await readFile(path.join(cwd, pathname), "utf8")

      JSON.parse(content)

      files.push({ content, pathname: pathname.split(path.sep).join("/") })
    }

    spinner.succeed(`Got registries`)

    spinner.start("Publishing registries")

    await publishRegistry(tag, files)

    spinner.succeed("Published registries")

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    console.log("\n", c.green(`Done in ${duration}s`))
  })
  .parseAsync()
