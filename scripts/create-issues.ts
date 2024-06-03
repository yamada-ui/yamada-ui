import { Octokit } from "@octokit/rest"
import { config } from "dotenv"
import type { Project } from "find-packages"
import { findPackages } from "find-packages"
import { recursiveOctokit, wait } from "./utils"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]

const SCRIPT_CODE = "make-component-headless"
const TARGET_KEY = "package"

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-ui" }
const ISSUE_BODY = (dir: string, manifest: Project["manifest"]) =>
  [
    `script: ${SCRIPT_CODE}`,
    `${TARGET_KEY}: ${manifest.name}`,
    "",
    "### Description",
    "",
    "### Problem Statement/Justification",
    "",
    "### Proposed Solution or API",
    "",
    "### Alternatives",
    "",
    "### Additional Information",
    "",
  ].join("\n")

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
      labels: "enhancement",
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

const getExistIssues = (issues: Issue[]) =>
  issues.reduce(
    (prev, issue) => {
      const packageName = issue.body?.match(
        new RegExp(`^script: ${SCRIPT_CODE}\\s+${TARGET_KEY}: ([^\s]+)`, "m"),
      )?.[1]

      if (packageName) prev[packageName] = issue

      return prev
    },
    {} as Record<string, Issue>,
  )

const main = async () => {
  const issues = await getIssues()
  const existIssues = getExistIssues(issues)
  const packages = await findPackages("packages/components")

  for await (const { dir, manifest } of packages) {
    if (manifest.name && existIssues[manifest.name]) continue

    await recursiveOctokit(async () => {
      const title = ``
      const body = ISSUE_BODY(dir, manifest)

      await octokit.issues.create({
        ...COMMON_PARAMS,
        title,
        body,
        labels: ["enhancement", "good first issue"],
      })
    })

    await wait(3000)
  }
}

main()
