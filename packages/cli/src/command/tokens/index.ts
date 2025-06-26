import type { Dict } from "../../utils/index.js"
import chokidar from "chokidar"
import { writeFile } from "fs/promises"
import ora from "ora"
import path from "path"
import c from "picocolors"
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
  const themeTokens = await generateThemeTokens(
    theme,
    config.theme ?? {},
    internal,
  )

  await writeFile(outPath, themeTokens, "utf8")
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
  const spinner = ora()

  spinner.start(`Getting theme`)

  inputPath = path.resolve(cwd, inputPath)

  let file = await getTheme(inputPath, cwd)

  const { config, dependencies, theme } = file

  spinner.succeed(`Got theme`)

  const buildFile = async () => {
    spinner.start(`Generating theme typings`)

    await buildThemeTokens({
      config,
      internal,
      outPath: outPath ?? path.join(inputPath, "index.types.ts"),
      theme,
    })

    spinner.succeed(`Generated theme typings`)

    if (watch) spinner.info("Watching for changes...")
  }

  if (watch) {
    const watchPath = isString(watch) ? watch : dependencies

    chokidar
      .watch(watchPath)
      .on("ready", buildFile)
      .on("change", async (path) => {
        spinner.info(`File changed ${path}`)

        file = await getTheme(inputPath, cwd)

        return buildFile()
      })
  } else {
    const start = process.hrtime.bigint()

    await buildFile()

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    console.log("\n", c.green(`Done in ${duration}s`))
  }
}
