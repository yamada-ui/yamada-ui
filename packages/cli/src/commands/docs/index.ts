import { Command, Option } from "commander"
import ora from "ora"
import { buildUrl, fetchDoc, trimToSection } from "./fetch-doc"

interface Options {
  lang: string
}

async function readStdin(): Promise<string> {
  const chunks: Buffer[] = []

  for await (const chunk of process.stdin) {
    chunks.push(chunk as Buffer)
  }

  return Buffer.concat(chunks).toString().trim()
}

function parsePath(input: string): { hash: string | undefined; path: string } {
  if (input.startsWith("http://") || input.startsWith("https://")) {
    const url = new URL(input)

    if (url.hostname !== "yamada-ui.com") {
      throw new Error(
        `Invalid URL: only yamada-ui.com URLs are supported, got ${url.hostname}`,
      )
    }

    return {
      hash: url.hash ? url.hash.slice(1) : undefined,
      path: url.pathname,
    }
  }

  const hashIndex = input.indexOf("#")

  if (hashIndex !== -1) {
    return { hash: input.slice(hashIndex + 1), path: input.slice(0, hashIndex) }
  }

  return { hash: undefined, path: input }
}

export const docs = new Command("docs")
  .description("fetch documentation from the Yamada UI documentation site.")
  .argument("[path]", "documentation path (e.g. /docs/components/button)")
  .addOption(
    new Option("--lang <lang>", "language: en | ja")
      .choices(["en", "ja"])
      .default("en"),
  )
  .action(async function (pathArg: string | undefined, { lang }: Options) {
    const spinner = ora()

    try {
      const isStdin = !process.stdin.isTTY

      if (isStdin && pathArg !== undefined) {
        throw new Error("Cannot specify both a path argument and stdin input.")
      }

      let rawInput: string | undefined = pathArg

      if (isStdin) {
        const stdinText = await readStdin()

        rawInput = stdinText || undefined
      }

      let docPath: string | undefined
      let hash: string | undefined

      if (rawInput) {
        const parsed = parsePath(rawInput)

        docPath = parsed.path
        hash = parsed.hash
      }

      const url = buildUrl(docPath, lang)

      spinner.start("Fetching documentation")

      let content = await fetchDoc(url)

      spinner.succeed("Fetched documentation")

      if (hash) {
        content = trimToSection(content, hash)
      }

      process.stdout.write(content)
    } catch (e) {
      if (e instanceof Error) {
        spinner.fail(e.message)
      } else {
        spinner.fail("An unknown error occurred")
      }
    }
  })
