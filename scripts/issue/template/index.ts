import type { Dict } from "@yamada-ui/utils"
import { writeFileWithFormat } from "@yamada-ui/workspace/prettier"
import { readFile } from "fs/promises"
import ora from "ora"
import path from "path"
import c from "picocolors"

type Package = "cli" | "react"

const TARGET_PACKAGES: Package[] = ["cli", "react"]
const PACKAGE_PATH = path.resolve("packages")
const ISSUE_TEMPLATE_PATH = path.resolve(".github", "ISSUE_TEMPLATE")
const DIST_PATHS = [
  path.join(ISSUE_TEMPLATE_PATH, "bug_report.yml"),
  path.join(ISSUE_TEMPLATE_PATH, "bug_report.ja.yml"),
]

async function getPackageJson(): Promise<Dict<Dict>> {
  return Object.fromEntries(
    await Promise.all(
      TARGET_PACKAGES.map(async (name) => {
        const content = await readFile(
          path.join(PACKAGE_PATH, name, "package.json"),
          "utf-8",
        )

        return [name, JSON.parse(content)]
      }),
    ),
  )
}

async function getIssueTemplate(): Promise<Dict<string>> {
  return Object.fromEntries(
    await Promise.all(
      DIST_PATHS.map(async (path) => {
        const content = await readFile(path, "utf-8")

        return [path, content]
      }),
    ),
  )
}

async function updateIssueTemplate(
  issueTemplate: Dict<string>,
  packageJson: Dict<Dict>,
) {
  return await Promise.all(
    Object.entries(issueTemplate).map(async ([path, template]) => {
      template = template.replace(
        /(\bid:\s*version\b(?:(?!\n {2}- type:)[\s\S])*?\n\s+placeholder:\s*")[^"]*(")/,
        `$1${packageJson.react!.version}$2`,
      )

      return writeFileWithFormat(path, template, { parser: "yaml" })
    }),
  )
}

async function main() {
  const spinner = ora()
  const start = process.hrtime.bigint()

  spinner.start(`Getting packages and issue templates`)

  const [packageJson, issueTemplate] = await Promise.all([
    getPackageJson(),
    getIssueTemplate(),
  ])

  spinner.succeed(`Got packages and issue templates`)

  spinner.start(`Updating issue templates`)

  await updateIssueTemplate(issueTemplate, packageJson)

  spinner.succeed(`Updated issue templates`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
