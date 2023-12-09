import { writeFile } from "fs"
import path from "path"
import { promisify } from "util"
import { bundleNRequire } from "bundle-n-require"
import chokidar from "chokidar"
import ora from "ora"
import { createThemeTypings } from "./create-theme-typings"
import { resolveOutputPath, themePath } from "./resolve-output-path"

const writeFileAsync = promisify(writeFile)

const generateThemeTypings = async ({
  theme,
  outFile,
}: {
  theme: Record<string, any>
  outFile?: string
}) => {
  const spinner = ora("Generating Yamada UI theme typings").start()

  try {
    const start = process.hrtime.bigint()

    const generatedTheme = await createThemeTypings(theme)

    const outPath = await resolveOutputPath(outFile)

    spinner.info()
    spinner.text = `Write file "${outPath}"...`

    await writeFileAsync(outPath, generatedTheme, "utf8")

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    spinner.succeed(`Done in ${duration}s\n`)
  } catch (e) {
    spinner.fail("An error occurred\n")

    if (e instanceof Error) console.error(e.message)
  } finally {
    spinner.stop()
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
