import type { Config } from "../../index.type"
import type { ConflictMap } from "./update-files"
import c from "picocolors"
import { transformExtension } from "../../utils"

export function printConflicts(conflictMap: ConflictMap, config: Config) {
  Object.entries(conflictMap).forEach(([name, files]) => {
    if (name === "index") {
      console.log(
        `- ${c.yellow(transformExtension("index.ts", config.jsx))}: ${config.paths.ui.index.replace(`${config.cwd}/`, "")}`,
      )
    } else {
      console.log(`- ${name}`)

      Object.entries(files).forEach(([fileName, path]) => {
        console.log(
          `  - ${c.yellow(fileName)}: ${path.replace(`${config.cwd}/`, "")}`,
        )
      })
    }
  })
}
