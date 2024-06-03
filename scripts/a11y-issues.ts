import { Octokit } from "@octokit/rest"
import { toCamelCase, toKebabCase } from "@yamada-ui/react"
import { config } from "dotenv"
import { execa } from "execa"
import { recursiveOctokit, wait } from "./utils"

type Story = { name: string; messages: string[] }
type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]

const STORYBOOK_ENDPOINT = `https://yamada-ui.github.io/yamada-ui/?path=/story`
const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-ui" }

const ISSUE_BODY = (name: string, path: string, stories: Story[]) => {
  const url = path
    .replace(/(^stories\/|\.stories\.(tsx|ts)$)/g, "")
    .split("/")
    .map((str, index, array) =>
      array.length === index + 1 ? str.replace(/-/g, "") : str,
    )
    .join("/")
    .replace(/\//g, "-")
  const count = stories.length

  return [
    `path: ${path}`,
    "",
    "### Description",
    `${count} accessibility violation${count > 1 ? "s" : ""} ${count > 1 ? "were" : "was"} found in the \`${name}\`.`,
    "",
    "### Target stories",
    "",
    stories
      .flatMap(({ name, messages }) => [
        `#### [${name}](${STORYBOOK_ENDPOINT}/${url}--${toKebabCase(name)})`,
        messages.join("\n\n"),
      ])
      .join("\n\n"),
    "",
    "### Problem Statement/Justification",
    "A11y is essential to ensure quality when operating a package.",
    "",
    "### Additional Information",
    "While it's ideal to cover all jobs, if there are too many jobs to work on, please create a PR within your capacity.",
    "Any deficiencies not covered by the PR will be automatically created as issues.",
  ].join("\n")
}

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const getIssues = async () => {
  let issues: Issue[] = []
  let page = 1
  let count = 0
  const perPage = 100

  const listForRepo = async () => {
    const { data } = await octokit.issues.listForRepo({
      ...COMMON_PARAMS,
      state: "open",
      labels: "a11y",
      per_page: perPage,
      page,
    })

    issues.push(...data)

    count = data.length

    if (count === perPage) {
      page++

      await recursiveOctokit(listForRepo)
    }
  }

  await recursiveOctokit(listForRepo)

  issues = issues.filter(({ pull_request }) => !pull_request)

  return issues
}

const getExistStories = (issues: Issue[]) =>
  issues.reduce(
    (prev, issue) => {
      const [, path] = issue.body?.match(/^path: ([^\s]+)/m) ?? []

      if (path) prev[path] = issue

      return prev
    },
    {} as Record<string, Issue>,
  )

const createReport = async () => {
  const { stderr } = await execa("pnpm", ["test:a11y"]).catch((e) => e)

  return stderr
}

const getStories = (data: string) => {
  const lines = data.split("\n")

  const stories: Story[] = []

  let draftStory: { name?: string; data?: string } = {}

  lines.forEach((line, index) => {
    if (line.match(/^\s*●.*smoke-test$/) || lines.length === index + 1) {
      if (draftStory.name && draftStory.data) {
        let { name, data } = draftStory

        data = data.trim()

        const isTimeout =
          /thrown:.*Exceeded timeout of 15000 ms for a test\./.test(data)

        let messages = data.split("-----------------------------------")

        messages = messages.filter(
          (message) => !/^assert.fail\(received, expected\)/.test(message),
        )
        messages = messages.filter(Boolean)
        messages = messages.map((message) => message.trim())

        if (!isTimeout) stories.push({ name, messages })
      }

      const [, name] = line.match(/› (\w+) ›/) ?? []

      draftStory.name = name
      draftStory.data = undefined
    } else {
      draftStory.data ??= ""

      draftStory.data += line + "\n"
    }
  })

  return stories
}

const sortReport = (report: string) => {
  const lines = report.split("\n")
  const passes: Set<string> = new Set()
  const fails: Map<string, Story[]> = new Map()

  let capture = false
  let draftFail: { path?: string; data?: string } = {}

  lines.forEach((line) => {
    const [path] = line.match(/stories\/.+?\.stories.(tsx|ts)/) ?? []

    if (
      line.startsWith("PASS") ||
      line.startsWith("FAIL") ||
      line.startsWith("Test Suites")
    ) {
      if (draftFail.path && draftFail.data) {
        const { path, data } = draftFail

        const stories = getStories(data)

        if (stories.length) {
          fails.set(path, stories)
        } else {
          passes.add(path)
        }

        draftFail.path = undefined
        draftFail.data = undefined
      }

      if (line.startsWith("PASS")) {
        capture = false

        if (path) passes.add(path)
      } else if (line.startsWith("FAIL")) {
        capture = true

        if (path) draftFail.path = path
      }
    } else if (capture) {
      draftFail.data ??= ""

      const isLog = /^\s*at.*:\d+:\d+.*$/.test(line)

      if (!isLog) draftFail.data += line + "\n"
    }
  })

  return { passes: Array.from(passes), fails: Array.from(fails) }
}

const createIssues = async (
  existStories: Record<string, Issue>,
  fails: [string, Story[]][],
) => {
  for await (const [path, stories] of fails) {
    let [, name] = path.match(/\/([\w-]+)\.stories.(tsx|ts)/) ?? []
    name = toCamelCase(name)

    const isExist = Object.keys(existStories).includes(path)
    const body = ISSUE_BODY(name, path, stories)

    await recursiveOctokit(async () => {
      if (isExist) {
        const { number, body: prevBody } = existStories[path]

        if (prevBody === body) {
          console.log("Skipped issue", number, path)

          return
        }

        await recursiveOctokit(() =>
          octokit.issues.update({
            ...COMMON_PARAMS,
            issue_number: number,
            body,
          }),
        )

        console.log("Updated issue", number, path)
      } else {
        await recursiveOctokit(() =>
          octokit.issues.create({
            ...COMMON_PARAMS,
            title: `Enhance a11y for \`${name}\``,
            body,
            labels: ["a11y", "test", "good first issue"],
          }),
        )

        console.log("Created issue", path)
      }
    })

    await wait(3000)
  }
}

const main = async () => {
  try {
    const issues = await getIssues()

    const existStories = getExistStories(issues)

    const report = await createReport()

    const { fails } = sortReport(report)

    await createIssues(existStories, fails)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
