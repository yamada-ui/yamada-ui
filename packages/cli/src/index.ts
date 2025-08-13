import checkNode from "cli-check-node"
import unhandledError from "cli-handle-unhandled"
import { Command } from "commander"
import c from "picocolors"
import updateNotifier from "update-notifier"
import pkg from "../package.json"
import { add } from "./commands/add"
import { diff } from "./commands/diff"
import { init } from "./commands/init"
import { tokens } from "./commands/tokens"

export async function run() {
  checkNode("22")

  await unhandledError()

  updateNotifier({
    pkg,
    shouldNotifyInNpmScript: true,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 3,
  }).notify({ isGlobal: true })

  console.log(
    `\n${c.bold(c.green("Yamada UI CLI"))} v${pkg.version} ${c.dim("by Yamada UI")}`,
  )
  console.log(`${c.dim(pkg.description)}\n`)

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
