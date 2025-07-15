import { Command } from "commander"
import { createRequire } from "node:module"
import c from "picocolors"
import { actionTheme, actionTokens } from "./command/index.js"
import { initCLI } from "./utils/index.js"

const pkg = createRequire(import.meta.url)("@yamada-ui/cli/package.json")

export const run = async () => {
  await initCLI()
  const program = new Command("Yamada UI CLI")
    .version(pkg.version)
    .usage(`${c.green("<command>")} [options]`)

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

  program.parse()
}
