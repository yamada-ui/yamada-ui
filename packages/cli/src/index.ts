import { Command } from "commander"
import c from "picocolors"
import pkg from "../package.json"
import { add } from "./commands/add"
import { diff } from "./commands/diff"
import { init } from "./commands/init"
import { tokens } from "./commands/tokens"
import { initCLI } from "./utils"

export async function run() {
  await initCLI()

  const program = new Command("Yamada UI CLI")
    .description("The official CLI for Yamada UI projects")
    .version(pkg.version, "-v, --version", "Display the version number")
    .usage(`${c.green("<command>")} [options]`)

  program.addCommand(init)
  program.addCommand(add)
  program.addCommand(diff)
  program.addCommand(tokens)

  program.parse()
}

if (process.argv.includes("--run")) {
  process.argv = process.argv.filter((arg) => arg !== "--run")

  run()
}
