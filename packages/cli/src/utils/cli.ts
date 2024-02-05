import checkNode from "cli-check-node"
import unhandledError from "cli-handle-unhandled"
import welcome from "cli-welcome"
import updateNotifier from "update-notifier"
import JSON from "../../package.json"

export const initCLI = async () => {
  checkNode("12")

  await unhandledError()

  welcome({
    title: "Yamada UI CLI",
    tagLine: `by Yamada UI\n${JSON.description}`,
    bgColor: `#3cc360`,
    color: `#FFFFFF`,
    bold: true,
    clear: false,
    version: JSON.version,
  })

  updateNotifier({
    pkg: JSON,
    shouldNotifyInNpmScript: true,
    updateCheckInterval: 1000 * 60 * 60 * 24 * 3,
  }).notify({ isGlobal: true })
}
