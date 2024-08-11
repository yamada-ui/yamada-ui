import * as path from "path"
import { program } from "commander"
import { actionTheme, actionTokens, themePath } from "./command"
import { initCLI } from "./utils"

export const run = async () => {
  await initCLI()

  program
    .command("tokens <path>")
    .option("-o, --out <path>", `Output file to ${path.join(...themePath)}`)
    .option("-w, --watch [path]", "Watch directory for changes and rebuild")
    .action(actionTokens)

  program
    .command("theme <path>")
    .option("-b, --branch <branch>", "Branch to download")
    .option("--cwd <path>", "Current working directory")
    .option("-r, --replace", "Force replace the theme")
    .action(actionTheme)

  program.on("-h, --help", () => {
    console.info(`\nExample call:\n`)
    console.info(`$ yamada-cli tokens theme.ts\n`)
    console.info(`$ yamada-cli theme ./theme\n`)
  })

  program.parse()
}
