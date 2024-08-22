import c from "chalk"
import checkNode from "cli-check-node"
import unhandledError from "cli-handle-unhandled"
import pkg from "../../package.json"

export const initCLI = async () => {
  checkNode("18")

  await unhandledError()

  console.log(
    `\n${c.bold.green("Create Yamada App")} v${pkg.version} ${c.dim("by Yamada UI")}`,
  )
  console.log(`${c.dim(pkg.description)}\n`)
}
