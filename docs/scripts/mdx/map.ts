import type { Document } from "mdx"
import type { DocumentMap, EventName } from "./utils"
import { writeFileSync } from "fs"
import path from "path"
import { MDX_PATH } from "./utils"

let MAP: DocumentMap = {}
let TIMEOUT_ID: NodeJS.Timeout | null = null

function updateMDXMap() {
  if (TIMEOUT_ID) clearTimeout(TIMEOUT_ID)

  TIMEOUT_ID = setTimeout(() => {
    writeFileSync(path.join(MDX_PATH, `map.json`), JSON.stringify(MAP))
  })
}

export function generateMDXMap(eventName: EventName) {
  return function (locale: string, slug: string, mdx?: Document) {
    MAP[locale] ??= {}

    if ((eventName === "add" || eventName === "change") && mdx) {
      MAP[locale][slug] = mdx
    } else if (eventName === "unlink") {
      delete MAP[locale][slug]

      if (!Object.keys(MAP[locale]).length) delete MAP[locale]
    }

    updateMDXMap()
  }
}
