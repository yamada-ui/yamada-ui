import { octokit, retryOnRateLimit } from "@yamada-ui/workspace/octokit"
import ora from "ora"
import c from "picocolors"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]

interface Data {
  name: string
  body: string
  title: string
}

const SCRIPT_CODE = "update-documentation"
const TARGET_KEY = "page"
const TARGET_LABELS = ["documentation"]

async function getIssues() {
  let issues: Issue[] = []
  let page = 1
  let count = 0
  const perPage = 100

  do {
    const { data } = await retryOnRateLimit(async () =>
      octokit.issues.listForRepo({
        labels: TARGET_LABELS.join(","),
        owner: "yamada-ui",
        page,
        per_page: 100,
        repo: "yamada-ui",
      }),
    )

    issues.push(...data)

    count = data.length

    page++
  } while (count === perPage)

  return issues
}

const getExistIssues = (issues: Issue[]) =>
  issues.reduce<{ [key: string]: Issue }>((prev, issue) => {
    const packageName = issue.body?.match(
      new RegExp(`^script: ${SCRIPT_CODE}\\s+${TARGET_KEY}: ([^\s]+)`, "m"),
    )?.[1]

    if (packageName) prev[packageName] = issue

    return prev
  }, {})

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Getting issues`)

  const issues = await getIssues()
  const existIssues = getExistIssues(issues)

  spinner.succeed(`Got issues`)

  spinner.start(`Getting data`)

  const data: Data[] = []
    .filter(({ name }) => !existIssues[name])
    .map((_data) => {
      const name = ""
      const title = ``
      const body = [`### Path`, ``, ``, ``, `### Description`, ``, ``, ``].join(
        "\n",
      )

      return { name, body, title }
    })

  spinner.succeed(`Got data`)

  spinner.start(`Generating issues`)

  await Promise.all(
    data.map(async ({ name, body, title }) => {
      const prefix = [`script: ${SCRIPT_CODE}`, `${TARGET_KEY}: ${name}`].join(
        "\n",
      )

      await retryOnRateLimit(async () =>
        octokit.issues.create({
          body: prefix + "\n\n" + body,
          labels: TARGET_LABELS,
          owner: "yamada-ui",
          project: "",
          repo: "yamada-ui",
          title,
        }),
      )
    }),
  )

  spinner.succeed(`Generated issues`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
