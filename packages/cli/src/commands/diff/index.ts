import { Command } from "commander"
import ora from "ora"
import { CONFIG_FILE_NAME } from "../../constant"
import { getConfig, timer, validateDir } from "../../utils"

interface Options {
  config: string
  cwd: string
}

export const diff = new Command("diff")
  .description("Check for updates against the registry")
  .argument("[component]", "Component to check")
  .option("--cwd <path>", "Current working directory", process.cwd())
  .option("-c, --config <path>", "Path to the config file", CONFIG_FILE_NAME)
  .action(async function (
    componentName: string,
    { config: configPath, cwd }: Options,
  ) {
    const spinner = ora()

    try {
      const { end } = timer()

      spinner.start("Validating directory")

      await validateDir(cwd)

      spinner.succeed("Validated directory")

      spinner.start("Fetching config")

      const config = await getConfig(cwd, configPath)

      console.log(config)

      spinner.succeed("Fetched config")

      end()
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }
    }
  })
