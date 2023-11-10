import { writeFile } from "fs"
import { promisify } from "util"
import ora from "ora"
import { resolveOutputPath, themePath } from "./resolve-output-path"
import { createThemeTypings } from "./create-theme-typings"

const writeFileAsync = promisify(writeFile)

export const generateThemeTypings = async ({
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

    spinner.succeed(`Done in ${duration}s`)
  } catch (e) {
    spinner.fail("An error occurred")

    if (e instanceof Error) console.error(e.message)
  } finally {
    spinner.stop()
  }
}

export { themePath }
