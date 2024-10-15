import type { EventName } from "./utils"
import { generateMDX } from "./document"
import { generateMDXMap } from "./map"
import { initMDX } from "./package"
import { generateMDXPaths } from "./paths"
import { getLocale, getSlug, isDefaultLocale } from "./utils"

initMDX()

export async function watchMDX(eventName: EventName, filePath: string) {
  if (eventName === "addDir" || eventName === "unlinkDir") return

  filePath = filePath.replace(/\\/g, "/")

  const locale = getLocale(filePath)
  const slug = getSlug(filePath)

  if (eventName === "add" || eventName === "change") {
    const mdx = await generateMDX(filePath)

    generateMDXMap(eventName)(locale, slug, mdx)

    if (isDefaultLocale(locale)) generateMDXPaths(eventName)(slug)
  } else {
    generateMDXMap(eventName)(locale, slug)

    if (isDefaultLocale(locale)) generateMDXPaths(eventName)(slug)
  }
}
