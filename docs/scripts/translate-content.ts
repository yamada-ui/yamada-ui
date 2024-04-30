import { existsSync } from "fs"
import { readFile, readdir, writeFile } from "fs/promises"
import * as p from "@clack/prompts"
import c from "chalk"
import { program } from "commander"
import type { ChatCompletionMessageParam } from "openai/resources"
import { openai } from "libs/openai"
import { prettier } from "libs/prettier"
import { wait } from "utils/async"

const LOCALE_MAP = {
  ja: "Japanese",
  en: "English",
} as const

type Option = { out?: string; locale?: keyof typeof LOCALE_MAP; logs?: boolean }

const getPaths = async (
  path: string,
  lang: keyof typeof LOCALE_MAP,
): Promise<string[]> => {
  try {
    const dirents = await readdir(path, { withFileTypes: true })

    const paths = await Promise.all(
      dirents.flatMap(async (dirent) => {
        const resolvedPath = `${path}/${dirent.name}`

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
    const isExist = existsSync(path)

    return isExist ? [path] : []
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

  return { resolvedContent, codeBlocks, placeholders }
}

const restoreCodeBlocks = (
  content: string,
  codeBlocks: string[],
  placeholders: string[],
) => {
  placeholders.forEach((placeholder, index) => {
    content = content.replace(placeholder, codeBlocks[index])
  })

  return content
}

const translateContent = async (
  content: string,
  locale: keyof typeof LOCALE_MAP,
  retry?: number,
): Promise<string> => {
  try {
    const from = `from ${LOCALE_MAP[locale === "en" ? "ja" : "en"]}`
    const to = `to ${LOCALE_MAP[locale]}`

    const { resolvedContent, codeBlocks, placeholders } =
      extractCodeBlocks(content)

    const messages: ChatCompletionMessageParam[] = [
      {
        role: "system",
        content: [
          `Please translate the text of the mdx file that I will send you ${from} ${to}. Please note the following points:`,
          `- The text you send will be saved as mdx. Therefore, except for the text to be translated, please output the contents of the sent mdx file as is.`,
          `- Be sure to avoid translating sentences that don't need to be translated. e.g, variables, arguments, component names, etc.`,
          // Exception handling:
          `- For short sentences, use "Usage" instead of "How to Use" as much as possible.  Also, when prompting for a hyperlink, use "please check [<page-title> or 'here'](<url>)".`,
        ].join("\n"),
      },
      { role: "user", content: resolvedContent },
    ]

    const { choices } = await openai.chat.completions.create({
      model: "gpt-4-1106-preview",
      messages,
      temperature: 0,
    })

    return restoreCodeBlocks(
      choices[0].message?.content,
      codeBlocks,
      placeholders,
    )
  } catch (e) {
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
    async (targetPath: string, { out: outPath, locale = "en" }: Option) => {
      p.intro(c.magenta(`Generating translate contents`))

      const s = p.spinner()

      const successes = new Map<string, string>()
      const errors = new Map<string, string>()

      try {
        const start = process.hrtime.bigint()

        s.start("Getting the contents")

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
              errors.set(path, e.message)
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
