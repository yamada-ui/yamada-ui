import { existsSync } from "fs"
import { mkdir, readFile, writeFile } from "fs/promises"
import * as p from "@clack/prompts"
import type { RestEndpointMethodTypes } from "@octokit/rest"
import { Octokit } from "@octokit/rest"
import { isArray } from "@yamada-ui/react"
import c from "chalk"
import type { Project } from "find-packages"
import { findPackages } from "find-packages"
import { prettier } from "./utils"

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

type PullRequests = RestEndpointMethodTypes["pulls"]["list"]["response"]["data"]
type PullRequest = PullRequests[number]

export type PullRequestData = {
  id: number
  url: string
  body: string
  date: string
  version: string | undefined
}

const OMITTED_DESCRIPTION =
  "> The changelog information of each package has been omitted from this message, as the content exceeds the size limit."

const REPO_REQUEST_PARAMETERS = {
  owner: "yamada-ui",
  repo: "yamada-ui",
}

const manifest = {
  path: ".changelog/manifest.json",

  async write(data: PullRequestData[]) {
    data = data.sort((a, b) => b.id - a.id)

    return writeFile(this.path, JSON.stringify(data, null, 2))
  },

  async read(): Promise<PullRequestData[]> {
    try {
      return JSON.parse(await readFile(this.path, "utf8"))
    } catch (error) {
      return []
    }
  },

  async update(data: PullRequestData) {
    const prevData = await this.read()

    const computedData = prevData.map((prevData) =>
      prevData.id === data.id ? data : prevData,
    )

    return this.write(computedData)
  },
}

const getPullRequests = async (): Promise<PullRequest | PullRequest[]> => {
  if (arg.includes("--latest")) {
    const { data } = await octokit.pulls.list({
      ...REPO_REQUEST_PARAMETERS,
      state: "closed",
      base: "main",
      head: "yamada-ui:changeset-release/main",
      per_page: 1,
    })

    return data[0]
  } else if (arg.includes("--number")) {
    const pull_number = +arg.replace("--number=", "")

    const { data } = await octokit.pulls.get({
      ...REPO_REQUEST_PARAMETERS,
      pull_number,
    })

    return data as PullRequest
  } else {
    let pullRequests: PullRequest[] = []
    let page = 1
    let count = 0
    const perPage = 100

    do {
      const { data } = await octokit.pulls.list({
        ...REPO_REQUEST_PARAMETERS,
        state: "all",
        base: "main",
        head: "yamada-ui:changeset-release/main",
        per_page: perPage,
        page,
      })

      pullRequests.push(...data)

      count = data.length

      page++
    } while (count === perPage)

    return pullRequests.filter(({ merged_at }) => merged_at)
  }
}

let cachePackages: Map<string, Project>

const getPackages = async (): Promise<Map<string, Project>> => {
  let packages: Map<string, Project> = new Map()

  if (cachePackages) {
    packages = cachePackages
  } else {
    const data = await findPackages("packages", {
      ignore: ["**/node_modules/**", "**/tests/**"],
    })

    data.forEach((data) => {
      if (data.manifest.name) packages.set(data.manifest.name, data)
    })

    cachePackages = packages
  }

  return packages
}

let cacheChangelogs: Map<string, string> = new Map()

const getChangelog = async (dir: string) => {
  let changelog = cacheChangelogs.get(dir)

  if (!changelog) {
    changelog = await readFile(`${dir}/CHANGELOG.md`, "utf-8")

    cacheChangelogs.set(dir, changelog)
  }

  return changelog
}

const restoreChangelog = async (content: string): Promise<string> => {
  const packages = await getPackages()

  const changelogs = await Promise.all(
    content
      .split("\n## ")
      .map((section) => section.replace("## ", "").trim())
      .map(async (name) => {
        const [, packageName, version] = name.match(/(@?[^@]+)@([^@]+)/) ?? []

        const { dir } = packages.get(packageName) ?? {}

        if (!dir) throw new Error(`Not found package ${packageName}`)

        const changelog = await getChangelog(dir)

        const match = new RegExp(
          `## ${version}([\\s\\S]*?)(?=## \\d|$)`,
          "g",
        ).exec(changelog)

        if (!match)
          throw new Error(`Not found version ${packageName}@${version}`)

        const content = match[0].replace(new RegExp(`## ${version}`), "").trim()

        return { name, content }
      }),
  )

  content = content
    .split("\n## ")
    .map((str) => {
      const { content } =
        changelogs.find(({ name }) => name === str.trim()) ?? {}

      return `## ${str}\n` + content
    })
    .join("\n")

  return content
}

const generateChangelog = async ({
  body: content,
  merged_at,
  updated_at,
  number: id,
  html_url: url,
}: PullRequest): Promise<PullRequestData | undefined> => {
  if (!content) return

  const parts = content.split("# Releases")
  content = parts[1] || content

  const date = new Date(merged_at ?? updated_at).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  const match = content.match(/## @yamada-ui\/react\@(?<version>\d.+)/)
  const version = match?.groups?.version

  if (!version) return

  const isOmitted = new RegExp(`^\s*${OMITTED_DESCRIPTION}`, "m").test(content)

  if (isOmitted) {
    content = content
      .replace(new RegExp(`^\s*${OMITTED_DESCRIPTION}`, "m"), "")
      .trim()

    content = await restoreChangelog(content)
  }

  content = content
    .replace(/\n### /g, "\n#### ")
    .replace(/\n## /g, "\n### ")
    .replace(/<(https?:\/\/.+)>/g, (_, value) => `[${value}](${value})`)

  const sections = content
    .split("\n### ")
    .slice(1)
    .map((str) => "### " + str.trim())

  const { main, dependencies } = sections.reduce<{
    main: string[]
    dependencies: string[]
  }>(
    (prev, section) => {
      if (/-\s+\[#\d+\]\(.+\)|-\s+\[`[^\]]+`\]\(.+\)/g.test(section)) {
        prev.main = [...prev.main, section]
      } else {
        prev.dependencies = [...prev.dependencies, section]
      }
      return prev
    },
    {
      main: [],
      dependencies: [],
    },
  )

  content = [
    "## Updated",
    ...main,
    "## Updated by dependencies",
    ...dependencies,
  ].join("\n")

  content = content
    .replace(
      /-\s*(Updated dependencies.*\s)[\s\S]*?(?=\n\S|\s*$)/g,
      (_, value) => {
        return `- ${value}`
      },
    )
    .replace(/-\s*(Updated dependencies).*/g, (substring, value) => {
      const commits = substring.match(/\[`(\w+)`\]\(([^\)]+)\)/g)
      const prefix = commits ? `${commits.join(" ")} ` : ``

      return `- ${prefix}${value}.`
    })

  const body = [
    "---",
    `title: Version ${version}`,
    `description: Explore the changelog for Yamada UI version ${version}. Learn about the latest features, bug fixes, and improvements.`,
    `release_url: ${url}`,
    `release_date: ${date}`,
    `version: ${version}`,
    "---",
    `${content}`,
  ].join("\n")

  return { id, url, body, date, version }
}

const writeVersionFile = async ({
  version,
  body,
}: PullRequestData): Promise<void> => {
  if (!existsSync(".changelog")) await mkdir(".changelog")

  body = await prettier(body, { parser: "mdx" })

  return writeFile(`.changelog/v${version}.mdx`, body)
}

const writeChangelogFile = async (): Promise<void> => {
  const data = await manifest.read()
  const sortedData = data.map(
    ({ date, version }) =>
      `### ${date}: [v${version}](/.changelog/v${version}.mdx)`,
  )
  const [latest, ...rest] = sortedData

  let body = [
    "# Changelog\n",
    "## Latest Release\n",
    latest,
    "\n## Previous Releases\n",
    ...rest,
  ].join("\n")

  body = await prettier(body, { parser: "markdown" })

  await writeFile("CHANGELOG.md", body)
}

const arg = process.argv[2] ?? ""

const main = async () => {
  p.intro(c.magenta(`Generating the changelog`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    s.start(`Getting the pull requests`)

    const pullRequests = await getPullRequests()

    s.stop(`Got the pull requests`)

    s.start(`Generating the version file`)

    if (isArray(pullRequests)) {
      const data = await Promise.all(pullRequests.map(generateChangelog))

      const resolvedData = data.filter(Boolean) as PullRequestData[]

      if (!resolvedData.length) throw new Error("Nothing to change")

      await Promise.allSettled([
        ...resolvedData.map(writeVersionFile),
        manifest.write(resolvedData),
      ])
    } else {
      const data = await generateChangelog(pullRequests)

      if (!data) throw new Error("Nothing to change")

      await writeVersionFile(data)

      await manifest.update(data)
    }

    s.stop(`Generated the version file`)

    s.start(`Writing the changelog file`)

    await writeChangelogFile()

    s.stop(`Wrote the version file`)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
