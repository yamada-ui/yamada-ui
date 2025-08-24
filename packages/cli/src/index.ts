import checkNode from "cli-check-node"
import unhandledError from "cli-handle-unhandled"
import { Command } from "commander"
import c from "picocolors"
import updateNotifier from "update-notifier"
import packageJson from "../package.json"
import { add } from "./commands/add"
import { diff } from "./commands/diff"
import { init } from "./commands/init"
import { theme } from "./commands/theme"
import { tokens } from "./commands/tokens"
import { update } from "./commands/update"

export async function run() {
  checkNode("22")

  await unhandledError()

  updateNotifier({
    pkg: packageJson,
    shouldNotifyInNpmScript: true,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 3,
  }).notify({ isGlobal: true })

  console.log(
    `\n${c.bold(c.green("Yamada UI CLI"))} v${packageJson.version} ${c.dim("by Yamada UI")}`,
  )
  console.log(`${c.dim(packageJson.description)}\n`)

  const program = new Command("Yamada UI CLI")
    .version(packageJson.version, "-v, --version", "display the version number")
    .usage(`${c.green("<command>")} [options]`)

  program.addCommand(init)
  program.addCommand(add)
  program.addCommand(update)
  program.addCommand(diff)
  program.addCommand(theme)
  program.addCommand(tokens)

  program.parse()
}

run()
