import * as path from "path"
import { program } from "commander"
import { actionColors } from "./command/colors"
import { actionTokens, themePath } from "./command/tokens"
import { initCLI } from "./utils"

export const run = async () => {
  await initCLI()

  program
    .command("tokens <source>")
    .option("-o, --out <path>", `Output file to ${path.join(...themePath)}`)
    .option("-w, --watch [path]", "Watch directory for changes and rebuild")
    .action(actionTokens)

  program
    .command("colors <color>")
    .option("-n, --name <name>", "Token name of hue object to output")
    .action(actionColors)

  program.on("-h, --help", () => {
    console.info(`\nExample call:\n`)
    console.info(`$ yamada-cli tokens theme.ts\n`)
    console.info(`$ yamada-cli colors #4285f4\n`)
  })

  program.parse()
}
