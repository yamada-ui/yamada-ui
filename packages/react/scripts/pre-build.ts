import { existsSync } from "fs"
import { mkdir, readdir, readFile, writeFile } from "fs/promises"
import path from "path"

async function copy(entryPath: string, outPath: string) {
  const dirents = await readdir(entryPath, { withFileTypes: true })

  if (!existsSync(outPath)) {
    await mkdir(outPath, { recursive: true })
  }

  await Promise.all(
    dirents.map(async (dirent) => {
      if (dirent.isDirectory()) {
        await copy(
          path.join(entryPath, dirent.name),
          path.join(outPath, dirent.name),
        )
      } else {
        if (/.test.(ts|tsx)$/.test(dirent.name)) return

        const data = await readFile(path.join(entryPath, dirent.name), "utf-8")

        await writeFile(path.join(outPath, dirent.name), data)
      }
    }),
  )
}

async function main() {
  await copy(
    path.join(process.cwd(), "..", "utils", "src"),
    path.join(process.cwd(), "src", "utils", "common"),
  )
  const index = await readFile(
    path.join(process.cwd(), "src", "utils", "index.ts"),
    "utf-8",
  )
  await writeFile(
    path.join(process.cwd(), "src", "utils", "index.ts"),
    index.replace("@yamada-ui/utils", "./common"),
  )
}

main()
