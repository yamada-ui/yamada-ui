import type { Dict } from "../../utils/index.js"
import * as p from "@clack/prompts"
import c from "chalk"
import chokidar from "chokidar"
import { writeFile } from "fs/promises"
import path from "path"
import { getModule, isString } from "../../utils/index.js"
import { generateThemeTokens } from "./generate-theme-tokens.js"

const buildThemeTokens = async ({
  config,
  internal,
  outPath,
  theme,
}: {
  config: Dict
  internal: boolean
  outPath: string
  theme: Dict
}) => {
  const s = p.spinner()

  try {
    s.start(`Parsing the theme`)

    const themeTokens = await generateThemeTokens(
      theme,
      config.theme ?? {},
      internal,
    )

    s.stop(`Parsed the theme`)

    s.start(`Writing file "${outPath}"`)

    await writeFile(outPath, themeTokens, "utf8")

    s.stop(`Wrote file`)
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

const getTheme = async (path: string, cwd: string) => {
  const { dependencies, mod } = await getModule(path, cwd)

  const theme =
    mod?.default ?? mod?.theme ?? mod?.customTheme ?? mod?.defaultTheme ?? {}
  const config = mod?.config ?? mod?.customConfig ?? mod?.defaultConfig ?? {}

  return { config, dependencies, theme }
}

interface Options {
  cwd?: string
  internal?: boolean
  out?: string
  watch?: boolean | string
}

export const actionTokens = async (
  inputPath: string,
  { cwd = path.resolve(), internal = false, out: outPath, watch }: Options,
) => {
  p.intro(c.magenta(`Generating Yamada UI theme typings`))

  inputPath = path.resolve(cwd, inputPath)

  let file = await getTheme(inputPath, cwd)

  const { config, dependencies, theme } = file

  const buildFile = async () => {
    await buildThemeTokens({
      config,
      internal,
      outPath: outPath ?? path.join(inputPath, "index.types.ts"),
      theme,
    })

    if (watch) p.log.info("Watching for changes...")
  }

  if (watch) {
    const watchPath = isString(watch) ? watch : dependencies

    chokidar
      .watch(watchPath)
      .on("ready", buildFile)
      .on("change", async (path) => {
        p.log.info(`File changed ${path}`)

        file = await getTheme(inputPath, cwd)

        return buildFile()
      })
  } else {
    const start = process.hrtime.bigint()

    await buildFile()

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(`${c.green(`Done`)} in ${c.dim(`${duration}s`)}\n`)
  }
}
