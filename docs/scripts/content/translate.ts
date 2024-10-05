import type { ChatCompletionMessageParam } from "openai/resources"
import * as p from "@clack/prompts"
import c from "chalk"
import { program } from "commander"
import { existsSync } from "fs"
import { readdir, readFile, writeFile } from "fs/promises"
import { openai } from "libs/openai"
import { prettier } from "libs/prettier"
import { wait } from "utils/async"
import { getResolvedPath } from "utils/path"

const LOCALE_MAP = {
  en: "English",
  ja: "Japanese",
} as const

interface Option {
  locale?: keyof typeof LOCALE_MAP
  logs?: boolean
  out?: string
}

const getPaths = async (
  targetPath: string,
  lang: keyof typeof LOCALE_MAP,
): Promise<string[]> => {
  try {
    const dirents = await readdir(targetPath, { withFileTypes: true })

    const paths = await Promise.all(
      dirents.flatMap(async (dirent) => {
        const resolvedPath = `${targetPath}/${dirent.name}`

        if (dirent.isDirectory()) {
          return await getPaths(resolvedPath, lang)
        } else {
          return resolvedPath
        }
      }),
    )

    let resolvedPaths = paths.flat()

    resolvedPaths = resolvedPaths.filter((path) =>
      lang === "en" ? path.endsWith(".ja.mdx") : !path.endsWith(".ja.mdx"),
    )

    return resolvedPaths
  } catch {
    const isExist = existsSync(targetPath)

    return isExist ? [targetPath] : []
  }
}

const getOutPath = (path: string, lang: keyof typeof LOCALE_MAP) =>
  path.replace(
    new RegExp(`${lang === "en" ? ".ja" : ""}\.mdx$`),
    `${lang === "en" ? "" : ".ja"}.mdx`,
  )

const getResultList = (map: Map<string, string>) =>
  Array.from(map.entries()).map(([path, duration]) => `${path} ${duration}s\n`)

const extractCodeBlocks = (content: string) => {
  const reg = /```[\s\S]*?```/g
  const codeBlocks = Array.from(content.match(reg) || [])
  const placeholders = codeBlocks.map(
    (_, index) => `CODEBLOCK_PLACEHOLDER_${index}`,
  )

  const resolvedContent = content.replace(reg, (match) => {
    const index = codeBlocks.indexOf(match)

    return `CODEBLOCK_PLACEHOLDER_${index}`
  })

  return { codeBlocks, placeholders, resolvedContent }
}

const restoreCodeBlocks = (
  content: string,
  codeBlocks: string[],
  placeholders: string[],
) => {
  placeholders.forEach((placeholder, index) => {
    content = content.replace(placeholder, codeBlocks[index]!)
  })

  return content
}

const translateContent = async (
  content: string,
  locale: keyof typeof LOCALE_MAP,
  retry = 0,
): Promise<string> => {
  try {
    const from = `from ${LOCALE_MAP[locale === "en" ? "ja" : "en"]}`
    const to = `to ${LOCALE_MAP[locale]}`

    const { codeBlocks, placeholders, resolvedContent } =
      extractCodeBlocks(content)

    const messages: ChatCompletionMessageParam[] = [
      {
        content: [
          `Please translate the text of the mdx file that I will send you ${from} ${to}. Please note the following points:`,
          `- The text you send will be saved as mdx. Therefore, except for the text to be translated, please output the contents of the sent mdx file as is.`,
          `- Be sure to avoid translating sentences that don't need to be translated. e.g, variables, arguments, component names, etc.`,
          // Exception handling:
          `- For short sentences, use "Usage" instead of "How to Use" as much as possible.  Also, when prompting for a hyperlink, use "please check [<page-title> or 'here'](<url>)".`,
        ].join("\n"),
        role: "system",
      },
      { content: resolvedContent, role: "user" },
    ]

    const { choices } = await openai.chat.completions.create({
      messages,
      model: "gpt-4-1106-preview",
      temperature: 0,
    })

    return restoreCodeBlocks(
      choices[0]?.message.content ?? "",
      codeBlocks,
      placeholders,
    )
  } catch {
    await wait(3000)

    retry += 1

    return await translateContent(content, locale, retry)
  }
}

program
  .argument("<path>")
  .option("-o, --out <path>")
  .option("-l, --locale <locale>")
  .action(
    async (targetPath: string, { locale = "en", out: outPath }: Option) => {
      p.intro(c.magenta(`Generating translate contents`))

      const s = p.spinner()

      const successes = new Map<string, string>()
      const errors = new Map<string, string>()

      try {
        const start = process.hrtime.bigint()

        s.start("Getting the contents")

        targetPath = getResolvedPath(targetPath)

        const resolvedPaths = await getPaths(targetPath, locale)

        s.stop("Got the contents")

        if (!resolvedPaths.length) throw new Error(`Not Found "${targetPath}"`)

        const totalCount = resolvedPaths.length

        s.start(`Translating the contents [0 / ${totalCount}]`)

        await Promise.all(
          resolvedPaths.map(async (path) => {
            const start = process.hrtime.bigint()

            try {
              let content = await readFile(path, "utf8")

              content = await translateContent(content, locale)

              content = await prettier(content)

              const resolvedOutPath = outPath ?? getOutPath(path, locale)

              await writeFile(resolvedOutPath, content)

              const end = process.hrtime.bigint()
              const duration = (Number(end - start) / 1e9).toFixed(2)

              successes.set(resolvedOutPath, duration)

              s.message(
                `Translated the contents [${successes.size} / ${totalCount}]`,
              )
            } catch (e) {
              if (e instanceof Error) errors.set(path, e.message)
            }
          }),
        )

        s.stop("Translated the contents")

        if (successes.size !== 0) {
          const message = getResultList(successes)
            .map((item) => `- ${item}`)
            .join("")
            .trim()

          p.note(message, `Generated contents`)
        }

        if (errors.size !== 0) {
          const message = getResultList(errors)
            .map((item) => `- ${item}`)
            .join("")
            .trim()

          p.note(message, `Failed contents`)
        }

        const end = process.hrtime.bigint()
        const duration = (Number(end - start) / 1e9).toFixed(2)

        p.outro(c.green(`Done in ${duration}s\n`))
      } catch (e) {
        s.stop(`An error occurred`, 500)

        p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
      }
    },
  )

program.parse()
