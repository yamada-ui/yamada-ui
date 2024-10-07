import type { DocumentMap } from "./utils"
import { writeFile } from "fs/promises"
import { glob } from "glob"
import path from "path"
import { generateMDX } from "./document"
import { initMDX } from "./package"
import { getLocale, getSlug, MDX_PATH } from "./utils"

async function builderMDX() {
  initMDX()

  const filePaths = await glob("contents/**/*.mdx")
  const count = filePaths.length

  const map: DocumentMap = {}
  const paths: string[] = []

  await Promise.all(
    filePaths.map(async (filePath) => {
      filePath = filePath.replace(/\\/g, "/")

      const locale = getLocale(filePath)
      const slug = getSlug(filePath)

      const mdx = await generateMDX(filePath)

      map[locale] ??= {}
      map[locale][slug] = mdx

      paths.push(slug)
    }),
  )

  console.log("generated", count, "files")

  await writeFile(path.join(MDX_PATH, `map.json`), JSON.stringify(map))
  await writeFile(path.join(MDX_PATH, `paths.json`), JSON.stringify(paths))
}

builderMDX()
