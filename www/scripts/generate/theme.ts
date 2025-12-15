import { theme } from "@yamada-ui/react/theme"
import { writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import ora from "ora"
import path from "path"
import c from "picocolors"

const DIST_PATH = path.resolve("data", "theme.json")

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Writing theme`)

  await writeFileWithFormat(DIST_PATH, JSON.stringify(theme, null, 2), {
    parser: "json",
  })

  spinner.succeed(`Wrote theme`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
