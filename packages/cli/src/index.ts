import c from "chalk"
import { Command } from "commander"
import { createRequire } from "node:module"
import {
  actionAdd,
  actionInit,
  actionMigrate,
  actionTheme,
  actionTokens,
} from "./command/index.js"
import { initCLI } from "./utils/index.js"

const pkg = createRequire(import.meta.url)("@yamada-ui/cli/package.json")

export const run = async () => {
  await initCLI()
  const program = new Command("Yamada UI CLI")
    .description(pkg.description)
    .version(pkg.version)
    .usage(`${c.green("<command>")} [options]`)

  program.command("init").action(actionInit)

  program.command("add <components...>").action(actionAdd)

  program
    .command("tokens <path>")
    .option("--cwd <path>", "Current working directory")
    .option("-o, --out <path>", `Output path`)
    .option("-w, --watch [path]", "Watch directory for changes and rebuild")
    .option("--internal", "Generate internal tokens")
    .action(actionTokens)

  program
    .command("theme <path>")
    .option("-b, --branch <branch>", "Branch to download")
    .option("--cwd <path>", "Current working directory")
    .option("-r, --replace", "Force replace the theme")
    .action(actionTheme)

  program.command("migrate").action(actionMigrate)

  program.parse()
}
