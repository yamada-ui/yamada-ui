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

function parsePath(input: string): {
  detectedLang: string | undefined
  hash: string | undefined
  path: string
} {
  if (input.startsWith("http://") || input.startsWith("https://")) {
    const url = new URL(input)

    const docsHostname = new URL(DOCS_BASE_URL).hostname

    if (url.hostname !== docsHostname) {
      throw new Error(
        `Invalid URL: only ${c.cyan(docsHostname)} URLs are supported, got ${c.yellow(url.hostname)}`,
      )
    }

    const langMatch = url.pathname.match(/^\/(ja|en)(?=\/)/)

    return {
      detectedLang: langMatch?.[1],
      hash: url.hash ? url.hash.slice(1) : undefined,
      path: url.pathname.replace(/^\/(ja|en)(?=\/)/, ""),
    }
  }

  const hashIndex = input.indexOf("#")

  if (hashIndex !== -1) {
    return {
      detectedLang: undefined,
      hash: input.slice(hashIndex + 1),
      path: input.slice(0, hashIndex),
    }
  }

  return { detectedLang: undefined, hash: undefined, path: input }
}

export const docs = new Command("docs")
  .description("fetch documentation from yamada-ui.com.")
  .argument("[path]", "documentation path (e.g. /components/button#disable).")
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
      let effectiveLang = lang

      if (rawInput) {
        const parsed = parsePath(rawInput)

        docPath = parsed.path || undefined
        hash = parsed.hash
        if (parsed.detectedLang) effectiveLang = parsed.detectedLang
      }

      if (hash && !docPath) {
        throw new Error(
          `A documentation path is required when specifying a section hash: ${c.yellow(`#${hash}`)}`,
        )
      }

      const needsEnFallback = effectiveLang !== "en" && !!hash

      spinner.start("Fetching documentation")

      const [content, enContent] = await Promise.all([
        fetchDoc(buildUrl(docPath, effectiveLang)),
        needsEnFallback
          ? fetchDoc(buildUrl(docPath, "en"))
          : Promise.resolve(undefined),
      ])

      let result = content

      if (hash) {
        if (!needsEnFallback) {
          result = trimToSection(content, hash)
        } else {
          const idx = findHeadingIndex(enContent!, hash)

          if (idx === -1) {
            throw new Error(`Section not found: ${c.yellow(`#${hash}`)}`)
          }

          result = trimToSectionByIndex(content, idx, hash)
        }
      }

      spinner.succeed("Fetched documentation")
      process.stdout.write(sections ? extractSections(result) : result)
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }

      process.exit(1)
    }
  })
