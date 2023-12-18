import { writeFile } from "fs/promises"
import path from "path"
import * as p from "@clack/prompts"
import { bundleNRequire } from "bundle-n-require"
import c from "chalk"
import chokidar from "chokidar"
import { createThemeTypings } from "./create-theme-typings"
import { resolveOutputPath, themePath } from "./resolve-output-path"

const generateThemeTypings = async ({
  theme,
  outFile,
}: {
  theme: Record<string, any>
  outFile?: string
}) => {
  p.intro(c.magenta(`Generating Yamada UI theme typings`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Parsing the theme`)

    const generatedTheme = await createThemeTypings(theme)

    s.stop(`Parsed the theme`)

    s.start(`Resolving the output path`)

    const outPath = await resolveOutputPath(outFile)

    s.stop(`Resolved the output path`)

    s.start(`Writing file "${outPath}"`)

    await writeFile(outPath, generatedTheme, "utf8")

    s.stop(`Wrote file`)

    p.note(outPath, "Output path")

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

export { themePath }

type Options = {
  out?: string
  watch?: string
}

export const actionTokens = async (
  themeFile: string,
  { out: outFile, watch: watchFile }: Options,
) => {
  const readFile = async () => {
    const filePath = path.resolve(themeFile)
    const { mod: theme, dependencies } = await bundleNRequire(filePath)

    return { theme, dependencies }
  }

  let file = await readFile()

  const buildFile = async () => {
    await generateThemeTypings({ theme: file.theme, outFile })

    if (watchFile) console.log("\n", "⌛️ Watching for changes...")
  }

  if (watchFile) {
    const watchPath =
      typeof watchFile === "string" ? watchFile : file.dependencies

    chokidar
      .watch(watchPath)
      .on("ready", buildFile)
      .on("change", async (filePath) => {
        console.log("📦 File changed", filePath)

        file = await readFile()

        return buildFile()
      })
  } else {
    await buildFile()
  }
}
