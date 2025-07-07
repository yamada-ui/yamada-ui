import { readdir, writeFile } from "node:fs/promises"

async function main() {
  const paths = await readdir("../packages/react/src/theme/tokens")

  await Promise.all(
    paths.map(async (path) => {
      if (path === "index.ts") return
      if (path.includes(".stories.")) return

      const token = path.split(".")[0]

      if (!token) return

      const title = token
        .replace(/([A-Z])/g, " $1")
        .replace(/[_-](.)/g, (_, val) => ` ${val.toUpperCase()}`)
        .replace(/^./, (str) => str.toUpperCase())
        .trim()

      await writeFile(
        `contents/theming/tokens/${token}.mdx`,
        [
          "---",
          `title: ${title}`,
          `description: The list of available ${token.replace("-", " ")} tokens`,
          "---",
        ].join("\n"),
      )

      await writeFile(
        `contents/theming/tokens/${token}.ja.mdx`,
        [
          "---",
          `title: ${title}`,
          `description: 利用可能な${token.replace("-", " ")}トークンのリスト`,
          "---",
        ].join("\n"),
      )
    }),
  )
}

main()
