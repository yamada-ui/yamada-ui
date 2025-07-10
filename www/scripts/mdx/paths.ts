import type { EventName } from "./utils"
import { writeFileSync } from "fs"
import path from "path"
import { MDX_PATH } from "./utils"

let PATHS: string[] = []
let TIMEOUT_ID: NodeJS.Timeout | null = null

function updateMDXPaths() {
  if (TIMEOUT_ID) clearTimeout(TIMEOUT_ID)

  TIMEOUT_ID = setTimeout(() => {
    writeFileSync(path.join(MDX_PATH, `paths.json`), JSON.stringify(PATHS))
  })
}

export function generateMDXPaths(eventName: EventName) {
  return function (slug: string) {
    if (eventName === "add") {
      PATHS.push(slug)
    } else if (eventName === "unlink") {
      PATHS = PATHS.filter((s) => s !== slug)
    }

    updateMDXPaths()
  }
}
