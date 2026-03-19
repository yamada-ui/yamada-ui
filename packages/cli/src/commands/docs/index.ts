import { Command } from "commander"
import fetch from "node-fetch"

const BASE_URL = "https://yamada-ui.com"

function readStdin(): Promise<string> {
  return new Promise((resolve) => {
    let data = ""

    process.stdin.on("data", (chunk) => {
      data += chunk
    })

    process.stdin.on("end", () => {
      resolve(data.trim())
    })

    if (process.stdin.isTTY) resolve("")
  })
}

function parseInput(input?: string) {
  if (!input) return { hash: "", path: "" }

  let value = input.trim()

  // URL → pathに変換
  if (value.startsWith("http")) {
    const url = new URL(value)
    value = url.pathname + url.hash
  }

  const [path, hash] = value.split("#")

  return {
    hash,
    path,
  }
}

function trimByHash(markdown: string, hash?: string) {
  if (!hash) return markdown

  const lines = markdown.split("\n")

  const startIndex = lines.findIndex((line) => {
    if (!line.startsWith("#")) return false

    const slug = line
      .replace(/^#+\s*/, "")
      .toLowerCase()
      .replace(/[^\w\u3040-\u9fff]+/g, "-")
      .replace(/^-|-$/g, "")

    return slug === hash.toLowerCase()
  })

  if (startIndex === -1) return markdown

  return lines.slice(startIndex).join("\n")
}

export const docs = new Command("docs")
  .argument("[path]")
  .option("--lang <lang>", "language", "en")
  .description("fetch yamada ui docs markdown")
  .action(async (input, options) => {
    try {
      let pathInput = input

      // stdin対応
      if (!pathInput && !process.stdin.isTTY) {
        pathInput = await readStdin()
      }

      const { hash, path } = parseInput(pathInput)

      let url: string

      if (!path) {
        url = `${BASE_URL}/llms.txt`
      } else {
        const prefix = options.lang === "ja" ? "/ja" : ""
        url = `${BASE_URL}${prefix}${path}.md`
      }

      const res = await fetch(url)

      if (!res.ok) {
        console.error(`Failed to fetch docs: ${res.status}`)
        process.exit(1)
      }

      const markdown = await res.text()

      const output = trimByHash(markdown, hash)

      console.log(output)
    } catch (_error) {
      console.error("Failed to fetch documentation")
      process.exit(1)
    }
  })
