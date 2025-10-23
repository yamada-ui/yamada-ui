import type { Dict } from "@yamada-ui/utils"
import { isUndefined } from "@yamada-ui/utils"
import { octokit } from "@yamada-ui/workspace/octokit"
import { writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { Command } from "commander"
import { readFile } from "fs/promises"
import { createTranslator } from "next-intl"
import ora from "ora"
import path from "path"
import c from "picocolors"
import { pathToFileURL } from "url"
import { CONSTANTS } from "@/constants"
import { getDocMap } from "@/data"
import { getLang } from "@/utils/i18n"

type PullRequest =
  | Awaited<ReturnType<typeof octokit.pulls.get>>["data"]
  | Awaited<ReturnType<typeof octokit.pulls.list>>["data"][number]

const MESSAGES_PATH = path.resolve("messages")
const CHANGELOG_PATH = path.resolve("contents", "changelog")
const DOC_MAP_PATH = path.resolve("data")

async function getPullRequest(pullNumber: number) {
  const { data } = await octokit.pulls.get({
    owner: "yamada-ui",
    pull_number: pullNumber,
    repo: "yamada-ui",
  })

  return data
}

async function getLatestPullRequest() {
  const { data } = await octokit.pulls.list({
    base: "main",
    head: "yamada-ui:changeset-release/main",
    owner: "yamada-ui",
    repo: "yamada-ui",
    state: "closed",
  })

  return data[0]!
}

function getContents(content: string) {
  content = content.trim()

  const results = [
    ...content.matchAll(/###\s+([\s\S]*?)\n([\s\S]*?)(?=\n###\s+|$)/g),
  ]

  return Object.fromEntries(
    results
      .map(([_, name, content]) => {
        if (!name || !content) return

        name = name.split(" ")[0]!.toLocaleLowerCase()
        content = content.trim().replaceAll(/\[`(.+?)`\]/g, "[$1]")

        if (name !== "patch" || !content.includes("-   Updated dependencies")) {
          return [name, content]
        } else {
          const [rest, dependencies] = content.split("-   Updated dependencies")
          const commits = dependencies
            ?.match(/\[(\w+)\]\(([^\)]+)\)/g)
            ?.join(" ")

          const mergedContent = `${rest ? `${rest.trim()}\n` : ""}- ${commits} Updated dependencies.`

          return [name, mergedContent]
        }
      })
      .filter((data) => !isUndefined(data)),
  ) as { major?: string; minor?: string; patch?: string }
}

function getPackages({ body }: PullRequest) {
  if (!body) return []

  const omittedBody = body.replace(/[\s\S]*?(?=##)/, "")
  const results = [
    ...omittedBody.matchAll(/##\s+(.+?)@(.+?)\n([\s\S]*?)(?=\n##\s+|$)/g),
  ]

  const packages = results
    .map(([_, name, version, content]) => {
      if (!name || !version || !content) return undefined

      const contents = getContents(content)

      return { ...contents, name, version }
    })
    .filter((data) => !isUndefined(data))

  return packages
}

async function getI18n(locale: string) {
  const lang = getLang(locale)
  const messages = (
    await import(pathToFileURL(`${MESSAGES_PATH}/${lang}.json`).href, {
      with: { type: "json" },
    })
  ).default
  const t = createTranslator<Dict>({ locale, messages })

  return { lang, t }
}

interface Options {
  pullNumber: number
}

function main() {
  const program = new Command()

  program
    .option("-p, --pull-number <number>", "pull request number")
    .action(async ({ pullNumber }: Options) => {
      const spinner = ora()

      const start = process.hrtime.bigint()

      spinner.start(`Getting latest pull request`)

      const pullRequest = pullNumber
        ? await getPullRequest(pullNumber)
        : await getLatestPullRequest()

      spinner.succeed(`Got latest pull request`)

      spinner.start(`Getting packages`)

      const packages = getPackages(pullRequest)

      spinner.succeed(`Got packages`)

      spinner.start("Writing changelog")

      await Promise.all(
        CONSTANTS.I18N.LOCALES.map(async (locale) => {
          const date = new Intl.DateTimeFormat(locale, {
            dateStyle: "long",
          }).format(new Date(pullRequest.merged_at ?? pullRequest.updated_at))
          const { lang, t } = await getI18n(locale)

          await Promise.all(
            packages.map(async ({ name, major, minor, patch, version }) => {
              const title = `v${version}`
              const description = t("changelog.version", { name, version })
              const folderName = name.split("/")[1]!

              if (!["cli", "react", "utils"].includes(folderName)) return

              const fileName = `${version.replaceAll(".", "-")}${locale === CONSTANTS.I18N.DEFAULT_LOCALE ? "" : `.${lang}`}.mdx`
              const filePath = path.join(CHANGELOG_PATH, folderName, fileName)
              const frontmatter = `---\ntitle: ${title}\ndescription: "${description}"\n---`
              const lines: string[] = []

              lines.push(t("changelog.releaseAt", { date }))

              if (major) lines.push(`## ${t("changelog.major")}`, major)
              if (minor) lines.push(`## ${t("changelog.minor")}`, minor)
              if (patch) lines.push(`## ${t("changelog.patch")}`, patch)

              const content = `${frontmatter}\n\n${lines.join("\n\n")}`

              await writeFileWithFormat(filePath, content, { parser: "mdx" })
            }),
          )
        }),
      )

      spinner.succeed("Wrote changelog")

      spinner.start("Updating doc map")

      await Promise.all(
        CONSTANTS.I18N.LOCALES.map(async (locale) => {
          const docMap = getDocMap(locale)
          const changelogItems = docMap.items!.find(
            ({ segment }) => segment === "changelog",
          )!.items!
          const lang = getLang(locale)

          changelogItems.forEach((item) => {
            const data = packages.find(({ name }) =>
              name.includes(item.segment),
            )

            if (!data || !item.items) return

            const { version } = data
            const title = `v${version}`
            const segment = version.replaceAll(".", "-")
            const exists = item.items.some((item) => item.segment === segment)

            if (exists) return

            item.items.push({
              title,
              // eslint-disable-next-line perfectionist/sort-objects
              segment,
              // eslint-disable-next-line perfectionist/sort-objects
              pathname:
                "/" + path.join("docs", "changelog", item.segment, segment),
            })

            item.items.sort((a, b) => b.segment.localeCompare(a.segment))
          })

          await writeFileWithFormat(
            path.join(DOC_MAP_PATH, `doc-map.${lang}.json`),
            docMap,
            { parser: "json" },
          )
        }),
      )

      spinner.succeed("Updated doc map")

      await Promise.all(
        CONSTANTS.I18N.LOCALES.map(async (locale) => {
          const docMap = getDocMap(locale)
          const changelogItems = docMap.items!.find(
            ({ segment }) => segment === "changelog",
          )!.items!
          const { lang, t } = await getI18n(locale)
          const title = t("changelog.title")
          const description = t("changelog.latest")
          const fileName = `index${locale === CONSTANTS.I18N.DEFAULT_LOCALE ? "" : `.${lang}`}.mdx`
          const filePath = path.join(CHANGELOG_PATH, fileName)
          const frontmatter = `---\ntitle: ${title}\ndescription: "${description}"\n---`
          const lines: string[] = []

          for (const { items, title } of changelogItems) {
            const latest = items![0]!
            const version = latest.title.replace(/^v/, "")
            const filePath =
              latest.pathname?.replace(/^\/docs\/changelog\//, "") +
              (locale === CONSTANTS.I18N.DEFAULT_LOCALE
                ? ".mdx"
                : `.${lang}.mdx`)
            const content = await readFile(
              path.join(CHANGELOG_PATH, filePath),
              "utf-8",
            )
            const transformedContent = content
              .split("---")[2]!
              .replaceAll("## ", "### ")

            lines.push(`## ${title}@${version}`)
            lines.push(transformedContent)
          }

          const content = `${frontmatter}\n\n${lines.join("\n\n")}`

          await writeFileWithFormat(filePath, content, { parser: "mdx" })
        }),
      )

      const end = process.hrtime.bigint()
      const duration = (Number(end - start) / 1e9).toFixed(2)

      console.log("\n", c.green(`Done in ${duration}s`))
    })

  program.parse()
}

main()
