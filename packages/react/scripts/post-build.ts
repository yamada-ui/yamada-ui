import { readFile, rm, writeFile } from "fs/promises"
import path from "path"

async function main() {
  rm(path.join(process.cwd(), "src", "utils", "common"), {
    force: true,
    recursive: true,
  })
  const index = await readFile(
    path.join(process.cwd(), "src", "utils", "index.ts"),
    "utf-8",
  )
  await writeFile(
    path.join(process.cwd(), "src", "utils", "index.ts"),
    index.replace("./common", "@yamada-ui/utils"),
  )
}

main()
