import type { Dict } from "../../utils"
import * as p from "@clack/prompts"
import c from "chalk"
import chokidar from "chokidar"
import { writeFile } from "fs/promises"
import path from "path"
import { getModule } from "../../utils"
import { createThemeTypings } from "./create-theme-typings"
import { resolveOutputPath, themePath } from "./resolve-output-path"

const generateThemeTypings = async ({
  config,
  outFile,
  theme,
}: {
  config: Dict
  theme: Dict
  outFile?: string
}) => {
  p.intro(c.magenta(`Generating Yamada UI theme typings`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Parsing the theme`)

    const generatedTheme = await createThemeTypings(theme, config.theme ?? {})

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

    p.outro(`${c.green(`Done`)} in ${c.dim(`${duration}s`)}\n`)
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

export { themePath }

interface Options {
  cwd?: string
  out?: string
  watch?: string
}

export const actionTokens = async (
  themePath: string,
  { cwd = path.resolve(), out: outFile, watch: watchFile }: Options,
) => {
  const readFile = async () => {
    const filePath = path.resolve(themePath)
    const { dependencies, mod } = await getModule(filePath, cwd)

    const theme =
      mod?.default ?? mod?.theme ?? mod?.customTheme ?? mod?.defaultTheme ?? {}
    const config = mod?.config ?? mod?.customConfig ?? mod?.defaultConfig ?? {}

    return { config, dependencies, theme }
  }

  let file = await readFile()

  const { config, dependencies, theme } = file

  const buildFile = async () => {
    await generateThemeTypings({ config, outFile, theme })

    if (watchFile) console.log("\n", "⌛️ Watching for changes...")
  }

  if (watchFile) {
    const watchPath = typeof watchFile === "string" ? watchFile : dependencies

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
