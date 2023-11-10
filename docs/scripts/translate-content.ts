import { existsSync } from "fs"
import { readFile, readdir, writeFile } from "fs/promises"
import chalk from "chalk"
import { program } from "commander"
import { ChatCompletionMessageParam } from "openai/resources"
import ora from "ora"
import { openai } from "libs/openai"
import { prettier } from "libs/prettier"
import { wait } from "utils/assertion"

const LANG_MAP = {
  ja: "Japanese",
  en: "English",
} as const

type Option = { out?: string; lang?: keyof typeof LANG_MAP; logs?: boolean }

const getPaths = async (path: string, lang: keyof typeof LANG_MAP): Promise<string[]> => {
  try {
    const dirents = await readdir(path, { withFileTypes: true })

    const paths = await Promise.all(
      dirents.flatMap(async (dirent) => {
        if (dirent.isDirectory()) {
          return await getPaths(`${path}/${dirent.name}`, lang)
        } else {
          return `${path}/${dirent.name}`
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

const getOutPath = (path: string, lang: keyof typeof LANG_MAP) =>
  path.replace(
    new RegExp(`${lang === "en" ? ".ja" : ""}\.mdx$`),
    `${lang === "en" ? "" : ".ja"}.mdx`,
  )

const getResultList = (map: Map<string, string>) =>
  Array.from(map.entries()).map(([path, duration]) => `${path}: ${duration}s\n`)

const translateContent = async ({
  content,
  lang,
  retry = 1,
  onRetry,
}: {
  content: string
  lang: keyof typeof LANG_MAP
  retry?: number
  onRetry?: (retry: number) => void
}): Promise<string> => {
  try {
    const from = `from ${LANG_MAP[lang === "en" ? "ja" : "en"]}`
    const to = `to ${LANG_MAP[lang]}`

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
      { role: "user", content },
    ]

    const { choices } = await openai.chat.completions.create({
      model: "gpt-4-1106-preview",
      messages,
      temperature: 0,
    })

    return choices[0].message?.content
  } catch (e) {
    onRetry?.(retry)

    await wait(3000)

    retry += 1

    return await translateContent({ content, lang, retry, onRetry })
  }
}

program
  .argument("<path>")
  .option("-o, --out <path>")
  .option("-l, --lang <lang>")
  .option("--logs")
  .action(async (targetPath: string, { out: outPath, lang = "en", logs: isLogs }: Option) => {
    const hrtime = process.hrtime()
    const spinner = !isLogs ? ora("Translating content files").start() : undefined
    const successes = new Map<string, string>()
    const errors = new Map<string, string>()

    try {
      if (spinner) spinner.text = `Read files...`

      const resolvedPaths = await getPaths(targetPath, lang)

      if (!resolvedPaths.length) throw new Error(`[${targetPath}] Not Found`)

      const totalCount = resolvedPaths.length

      if (spinner) spinner.text = `Translate files [0 / ${totalCount}]...`

      await Promise.all(
        resolvedPaths.map(async (path) => {
          try {
            const hrtime = process.hrtime()

            let content = await readFile(path, "utf8")

            const onRetry = (retry: number) => {
              if (isLogs) console.log(chalk.gray(`[${path}]`), chalk.yellow(`Retry(${retry})`))
            }

            content = await translateContent({ content, lang, onRetry })

            content = await prettier(content)

            const resolvedOutPath = outPath ?? getOutPath(path, lang)

            await writeFile(resolvedOutPath, content)

            const [start, end] = process.hrtime(hrtime)
            const duration = (Number(end - start) / 1e9).toFixed(2)

            successes.set(resolvedOutPath, duration)

            if (isLogs) console.log(chalk.gray(`[${path}]`), chalk.green(`Done ${duration}s`))

            if (spinner) spinner.text = `Translate files [${successes.size} / ${totalCount}]...`
          } catch (e) {
            errors.set(path, e.message)
          }
        }),
      )

      const [start, end] = process.hrtime(hrtime)
      const duration = (Number(end - start) / 1e9).toFixed(2)

      if (spinner) {
        spinner.succeed(chalk.green(`Done in ${duration}s` + "\n"))
      } else {
        console.log("\n" + chalk.green(`Done in ${duration}s` + "\n"))
      }

      if (!isLogs) {
        if (successes.size !== 0)
          console.log(chalk.bgGreen(" Successes "), "\n", chalk.green(...getResultList(successes)))

        if (errors.size !== 0)
          console.log(chalk.bgRed(" Errors "), "\n", chalk.red(...getResultList(errors)))
      }
    } catch (e) {
      if (spinner) {
        spinner.fail(chalk.red(e.message))
      } else {
        console.log(chalk.red(e.message))
      }
    }
  })

program.parse()
