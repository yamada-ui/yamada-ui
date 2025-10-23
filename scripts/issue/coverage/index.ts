import { toCamelCase, toPascalCase } from "@yamada-ui/utils"
import { codecov } from "@yamada-ui/workspace/codecov"
import {
  octokit,
  retryOnRateLimit,
  retryOnRateLimitWithPaging,
} from "@yamada-ui/workspace/octokit"
import ora from "ora"
import c from "picocolors"

const OWNER_NAME = "yamada-ui"
const REPO_NAME = "yamada-ui"
const TARGET_COVERAGE = 95
const REPORT_ENDPOINT = `https://app.codecov.io/gh/${OWNER_NAME}/${REPO_NAME}/blob/main`

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]

interface Totals {
  branches: number
  complexity: number
  complexity_ratio: number
  complexity_total: number
  coverage: number
  diff: any
  files: number
  hits: number
  lines: number
  messages: number
  methods: number
  misses: number
  partials: number
  sessions: number
}

interface File {
  name: string
  line_coverage: [number, number][]
  totals: Totals
}

interface CoverageReport {
  commit_file_url: string
  files: File[]
  totals: Totals
}

async function getIssues() {
  const issues = await retryOnRateLimitWithPaging(async (params) =>
    octokit.issues.listForRepo({
      labels: "test,coverage",
      owner: OWNER_NAME,
      repo: REPO_NAME,
      state: "open",
      ...params,
    }),
  )

  return issues
    .filter(({ pull_request }) => !pull_request)
    .reduce<{ [key: string]: { [key: string]: Issue } }>((prev, issue) => {
      const packageName = issue.body?.match(/^package: ([^\s]+)/m)?.[1]
      const groupName = issue.body?.match(/^group: ([^\s]+)/m)?.[1]

      if (!packageName || !groupName) return prev

      prev[packageName] ??= {}
      prev[packageName][groupName] = issue

      return prev
    }, {})
}

async function getCoverageReport() {
  const data = await codecov<CoverageReport>(`/repos/${REPO_NAME}/report`)

  return data
}

function getPackages(files: File[]) {
  const packages: { [key: string]: { [key: string]: number[] } } = {}

  files.forEach(({ name, line_coverage, totals }) => {
    const { coverage, lines, misses, partials } = totals

    if (coverage >= TARGET_COVERAGE) return

    const packageName = `@yamada-ui/${name.split("/")[1]!}`

    if (lines === misses + partials) {
      packages[packageName] ??= {}
      packages[packageName][name] = []
    } else {
      const targetLines: number[] = []

      line_coverage.forEach(([line, flg], index) => {
        const [, prevFlg] = line_coverage[index - 1] ?? []

        if (flg === 1 && prevFlg !== 1) targetLines.push(line)
      })

      packages[packageName] ??= {}
      packages[packageName][name] = targetLines
    }
  })

  return packages
}

function groupingFiles(
  packageName: string,
  files: { [key: string]: number[] },
) {
  const fileGroups: { [key: string]: { [key: string]: number[] } } = {}

  Object.entries(files).forEach(([path, lines]) => {
    let omittedPath = path.replace(/^packages\/(.+)\/src\//, "")
    const camelCase = omittedPath.startsWith("hooks")
    const pascalCase =
      omittedPath.startsWith("components") ||
      omittedPath.startsWith("providers")

    if (packageName === "@yamada-ui/react") {
      omittedPath = omittedPath.replace(/^(components|hooks|providers)\//, "")
    } else if (packageName === "@yamada-ui/cli") {
      omittedPath = omittedPath.replace(/^(commands|utils)\//, "")
    }

    const groupName = omittedPath.split("/")[0]!.replace(/.(ts|tsx)$/, "")
    const transformedGroupName = camelCase
      ? toCamelCase(groupName)
      : pascalCase
        ? toPascalCase(groupName)
        : groupName

    fileGroups[transformedGroupName] ??= {}
    fileGroups[transformedGroupName][path] = lines
  })

  return fileGroups
}

function createBody(
  packageName: string,
  groupName: string,
  files: { [key: string]: number[] },
) {
  return [
    `package: ${packageName}`,
    `group: ${groupName}`,
    "",
    "### Description",
    `Test coverage for \`${groupName}\` in \`${packageName}\` is less than ${TARGET_COVERAGE}%. Please increase it to at least ${TARGET_COVERAGE}%.`,
    "",
    "### Target files",
    ...Object.entries(files).flatMap(([path, lines]) => [
      `- [${path}](${REPORT_ENDPOINT}/${path})`,
      ...lines.map(
        (line) => `  - [L${line}](${REPORT_ENDPOINT}/${path}#L${line})`,
      ),
    ]),
    "",
    "### Additional Information",
    "While it's ideal to cover all tests, if there are too many lines to work on, please create a PR within your capacity.",
    "Any deficiencies not covered by the PR will be automatically created as issues.",
  ].join("\n")
}

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Getting issues`)

  const issues = await getIssues()

  spinner.succeed(`Got issues`)

  spinner.start(`Getting coverage report`)

  const { files } = await getCoverageReport()
  const packages = getPackages(files)

  spinner.succeed(`Got coverage report`)

  spinner.start(`Creating issues`)

  await Promise.all(
    Object.entries(packages).map(async ([packageName, files]) => {
      const fileGroups = groupingFiles(packageName, files)

      await Promise.all(
        Object.entries(fileGroups).map(async ([groupName, files]) => {
          const issue = issues[packageName]?.[groupName]
          const body = createBody(packageName, groupName, files)

          if (issue) {
            if (issue.body === body) {
              spinner.info(
                `Skipped issue ${issue.number} ${packageName}:${groupName}`,
              )
            } else {
              await retryOnRateLimit(() =>
                octokit.issues.update({
                  body,
                  issue_number: issue.number,
                  owner: OWNER_NAME,
                  repo: REPO_NAME,
                }),
              )

              spinner.info(
                `Updated issue ${issue.number} ${packageName}:${groupName}`,
              )
            }
          } else {
            await retryOnRateLimit(() =>
              octokit.issues.create({
                body,
                labels: ["coverage", "test", "good first issue"],
                owner: OWNER_NAME,
                repo: REPO_NAME,
                title: `Enhance Test Coverage for \`${groupName}\` in \`${packageName}\``,
              }),
            )

            spinner.info(`Created issue ${packageName}:${groupName}`)
          }
        }),
      )
    }),
  )

  spinner.succeed(`Created issues`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
