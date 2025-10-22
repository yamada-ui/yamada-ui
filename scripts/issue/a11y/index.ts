import { toKebabCase } from "@yamada-ui/utils"
import {
  octokit,
  retryOnRateLimit,
  retryOnRateLimitWithPaging,
} from "@yamada-ui/workspace/octokit"
import { execa } from "execa"
import { readFile } from "fs/promises"
import ora from "ora"
import path from "path"
import c from "picocolors"
import stripAnsi from "strip-ansi"

const OWNER_NAME = "yamada-ui"
const REPO_NAME = "yamada-ui"
const STORYBOOK_ENDPOINT = "https://yamada-ui.github.io/yamada-ui"

type Issue = Awaited<
  ReturnType<typeof octokit.issues.listForRepo>
>["data"][number]

interface Snapshot {
  added: number
  didUpdate: boolean
  failure: boolean
  filesAdded: number
  filesRemoved: number
  filesRemovedList: any[]
  filesUnmatched: number
  filesUpdated: number
  matched: number
  total: number
  unchecked: number
  uncheckedKeysByFile: any[]
  unmatched: number
  updated: number
}

interface FailureDetail {
  message: string
}

interface AssertionResult {
  ancestorTitles: string[]
  duration: 701
  failureDetails: FailureDetail[]
  failureMessages: string[]
  fullName: string
  invocations: number
  location: null
  numPassingAsserts: number
  retryReasons: any[]
  status: string
  title: string
}

interface TestResult {
  name: string
  assertionResults: AssertionResult[]
  endTime: number
  message: string
  startTime: number
  status: string
  summary: string
}

interface Report {
  numFailedTests: number
  numFailedTestSuites: number
  numPassedTests: number
  numPassedTestSuites: number
  numPendingTests: number
  numPendingTestSuites: number
  numRuntimeErrorTestSuites: number
  numTodoTests: number
  numTotalTests: number
  numTotalTestSuites: number
  openHandles: any[]
  snapshot: Snapshot
  startTime: number
  success: boolean
  testResults: TestResult[]
  wasInterrupted: boolean
}

async function getIssues() {
  const issues = await retryOnRateLimitWithPaging(async (params) =>
    octokit.issues.listForRepo({
      labels: "test,a11y",
      owner: OWNER_NAME,
      repo: REPO_NAME,
      state: "open",
      ...params,
    }),
  )

  return issues
    .filter(({ pull_request }) => !pull_request)
    .reduce<{ [key: string]: Issue }>((prev, issue) => {
      const name = issue.body?.match(/^name: ([^\s]+)/m)?.[1]

      if (!name) return prev

      prev[name] = issue

      return prev
    }, {})
}

async function createReport() {
  await execa("pnpm", ["react", "test:a11y"]).catch((e) => e)
}

async function getReport() {
  const data = await readFile(
    path.resolve("packages", "react", "report.json"),
    "utf-8",
  )

  return JSON.parse(data) as Report
}

function getFailures({ testResults }: Report) {
  const failures: { [key: string]: { [key: string]: string[] } } = {}

  testResults.forEach(({ assertionResults }) => {
    assertionResults.forEach(({ ancestorTitles, failureMessages }) => {
      if (!failureMessages.length) return

      const failureMessage = stripAnsi(failureMessages[0]!)
      const timeout =
        failureMessage.startsWith("Error:") &&
        failureMessage.includes("Exceeded timeout")
      const [group, name] = ancestorTitles

      if (timeout) return
      if (!group || !name) return
      if (!group.startsWith("Components") && !group.startsWith("Hooks")) return

      let categoryName = group
      let storyName = name

      const categoryNames = group.split(" / ")

      if (categoryNames.length > 2) {
        categoryName = categoryNames.slice(0, -1).join(" / ")
        storyName = categoryNames.at(-1) + " / " + storyName
      }

      const details = failureMessage
        .split("-----------------------------------")
        .slice(1, -1)
        .map((detail) => detail.trim().replace(/^.*(?=Received:)/s, ""))

      failures[categoryName] ??= {}
      failures[categoryName]![storyName] = details
    })
  })

  return failures
}

function createBody(
  categoryName: string,
  name: string,
  stories: { [key: string]: string[] },
) {
  const count = Object.values(stories).reduce(
    (prev, details) => prev + details.length,
    0,
  )

  return [
    `name: ${name}`,
    "",
    "### Description",
    `${count} accessibility violation was found in the \`${name}\`.`,
    "",
    "### Target stories",
    "",
    ...Object.entries(stories).flatMap(([storyName, details]) =>
      details.map((detail) => {
        const title = categoryName + " / " + storyName

        let transformedCategoryName = categoryName
        let transformedStoryName = storyName

        const storyNames = storyName.split(" / ")

        if (storyNames.length > 1) {
          transformedStoryName = storyNames.at(-1)!
          transformedCategoryName =
            transformedCategoryName +
            " / " +
            storyNames.slice(0, -1).join(" / ")
        }

        const link =
          STORYBOOK_ENDPOINT +
          `/?path=/story/${transformedCategoryName.replaceAll(" / ", "-").toLowerCase()}--${toKebabCase(transformedStoryName)}`

        return [`#### [${title}](${link})`, "", detail, ""].join("\n")
      }),
    ),
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

  spinner.start("Creating report")

  await createReport()

  spinner.succeed("Created report")

  spinner.start("Getting report")

  const report = await getReport()
  const failures = getFailures(report)

  spinner.succeed("Got report")

  spinner.start(`Creating issues`)

  await Promise.all(
    Object.entries(failures).map(async ([categoryName, stories]) => {
      const name = categoryName.split(" / ").at(-1)!

      const issue = issues[name]
      const body = createBody(categoryName, name, stories)

      if (issue) {
        if (issue.body === body) {
          spinner.info(`Skipped issue ${issue.number} ${categoryName}`)
        } else {
          await retryOnRateLimit(() =>
            octokit.issues.update({
              body,
              issue_number: issue.number,
              owner: OWNER_NAME,
              repo: REPO_NAME,
            }),
          )

          spinner.info(`Updated issue ${issue.number} ${categoryName}`)
        }
      } else {
        await retryOnRateLimit(() =>
          octokit.issues.create({
            body,
            labels: ["a11y", "test", "good first issue"],
            owner: OWNER_NAME,
            repo: REPO_NAME,
            title: `Enhance a11y for \`${name}\``,
          }),
        )

        spinner.info(`Created issue ${categoryName}`)
      }
    }),
  )

  spinner.succeed(`Created issues`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
