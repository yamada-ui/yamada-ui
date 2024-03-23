import { readFile } from "fs/promises"
import { execa } from "execa"

const main = async () => {
  try {
    await execa("vitest", [
      "run",
      "--coverage",
      "--config",
      "vite.config.json-summary.mts",
    ])

    const data = await readFile("coverage/coverage-summary.json", "utf-8")
    const json = JSON.parse(data)

    console.log(json)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
