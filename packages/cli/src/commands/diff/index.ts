import { Command } from "commander"
import ora from "ora"
import c from "picocolors"
import { CONFIG_FILE_NAME } from "../../constant"

interface Options {
  cwd: string
}

export const diff = new Command("diff")
  .description("Check for updates against the registry")
  .option("--cwd <path>", "Current working directory", process.cwd())
  .option("-c, --config <path>", "Path to the config file", CONFIG_FILE_NAME)
  .action(function ({ cwd }: Options) {
    const spinner = ora()

    try {
      const start = process.hrtime.bigint()

      console.log(cwd)

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log("\n", c.green(`Done in ${duration}s`))
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }
    }
  })
