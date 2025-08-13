import checkNode from "cli-check-node"
import unhandledError from "cli-handle-unhandled"
import c from "picocolors"
import updateNotifier from "update-notifier"
import pkg from "../../package.json"

export async function initCLI() {
  checkNode("22")

  await unhandledError()

  console.log(
    `\n${c.bold(c.green("Yamada UI CLI"))} v${pkg.version} ${c.dim("by Yamada UI")}`,
  )
  console.log(`${c.dim(pkg.description)}\n`)

  updateNotifier({
    pkg,
    shouldNotifyInNpmScript: true,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 3,
  }).notify({ isGlobal: true })
}
