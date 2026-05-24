import { Command, Option } from "commander"
import ora from "ora"
import c from "picocolors"
import { DOCS_BASE_URL } from "../../constant"
import {
  buildUrl,
  extractSections,
  fetchDoc,
  findHeadingIndex,
  trimToSection,
  trimToSectionByIndex,
} from "./fetch-doc"

interface Options {
  lang: string
  sections: boolean
}

async function readStdin(): Promise<string> {
  const chunks: Buffer[] = []

  for await (const chunk of process.stdin) {
    chunks.push(chunk as Buffer)
  }

  const text = Buffer.concat(chunks).toString()

  return (
    text
      .split("\n")
      .map((l) => l.trim())
      .find((l) => l.length > 0) ?? ""
  )
}

function parsePath(input: string): { hash: string | undefined; path: string } {
  if (input.startsWith("http://") || input.startsWith("https://")) {
    const url = new URL(input)

    const docsHostname = new URL(DOCS_BASE_URL).hostname

    if (url.hostname !== docsHostname) {
      throw new Error(
        `Invalid URL: only ${c.cyan(docsHostname)} URLs are supported, got ${c.yellow(url.hostname)}`,
      )
    }

    return {
      hash: url.hash ? url.hash.slice(1) : undefined,
      path: url.pathname.replace(/^\/(ja|en)(?=\/)/, ""),
    }
  }

  const hashIndex = input.indexOf("#")

  if (hashIndex !== -1) {
    return { hash: input.slice(hashIndex + 1), path: input.slice(0, hashIndex) }
  }

  return { hash: undefined, path: input }
}

export const docs = new Command("docs")
  .description("fetch documentation from yamada-ui.com.")
  .argument(
    "[path]",
    "documentation path (e.g. /docs/components/button#disable).",
  )
  .addOption(
    new Option("--lang <lang>", "language.")
      .choices(["en", "ja"])
      .default("en"),
  )
  .option("--sections", "list section headings instead of full content.")
  .action(async function (
    pathArg: string | undefined,
    { lang, sections }: Options,
  ) {
    const spinner = ora()

    try {
      const isStdin = !process.stdin.isTTY && pathArg === undefined

      let rawInput: string | undefined = pathArg?.trim() || undefined

      if (isStdin) {
        const stdinText = await readStdin()

        rawInput = stdinText || undefined
      }

      let docPath: string | undefined
      let hash: string | undefined

      if (rawInput) {
        const parsed = parsePath(rawInput)

        docPath = parsed.path || undefined
        hash = parsed.hash
      }

      if (hash && !docPath) {
        throw new Error(
          `A documentation path is required when specifying a section hash: ${c.yellow(`#${hash}`)}`,
        )
      }

      const url = buildUrl(docPath, lang)

      spinner.start("Fetching documentation")

      let content = await fetchDoc(url)

      spinner.succeed("Fetched documentation")

      if (hash) {
        if (lang === "en") {
          content = trimToSection(content, hash)
        } else {
          const enContent = await fetchDoc(buildUrl(docPath, "en"))
          const idx = findHeadingIndex(enContent, hash)

          if (idx === -1) {
            throw new Error(`Section not found: ${c.yellow(`#${hash}`)}`)
          }

          content = trimToSectionByIndex(content, idx, hash)
        }
      }

      process.stdout.write(sections ? extractSections(content) : content)
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }

      process.exit(1)
    }
  })
