import { Command } from "commander"
import ora from "ora"
import c from "picocolors"

interface Options {
  cwd: string
}

export const init = new Command("init")
  .description("Initialize your project and install dependencies")
  .option("--cwd <path>", "Current working directory", process.cwd())
  .action(function ({ cwd }: Options) {
    const spinner = ora()

    spinner.start("")

    console.log(cwd)

    spinner.succeed("")

    const start = process.hrtime.bigint()

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    console.log("\n", c.green(`Done in ${duration}s`))
  })
