import c from "chalk"
import { Command } from "commander"
import path from "path"
import pkg from "../package.json"
import { actionTheme, actionTokens, themePath } from "./command"
import { initCLI } from "./utils"

export const run = async () => {
  await initCLI()

  const program = new Command(pkg.name)
    .name("yamada-cli")
    .description(pkg.description)
    .version(pkg.version)
    .usage(`${c.green("<command>")} [options]`)

  program
    .command("tokens <path>")
    .option("--cwd <path>", "Current working directory")
    .option("-o, --out <path>", `Output file to ${path.join(...themePath)}`)
    .option("-w, --watch [path]", "Watch directory for changes and rebuild")
    .action(actionTokens)

  program
    .command("theme <path>")
    .option("-b, --branch <branch>", "Branch to download")
    .option("--cwd <path>", "Current working directory")
    .option("-r, --replace", "Force replace the theme")
    .action(actionTheme)

  program.parse()
}
