import { readFileSync, writeFileSync } from "fs"
import path from "path"

import ora from "ora"
import c from "picocolors"

interface PackageJson {
  name: string
  version: string
}

interface TemplateConfig {
  path: string
  getDescription: (
    reactPackageJson: PackageJson,
    cliPackageJson: PackageJson,
  ) => string
  getPlaceholder: (reactPackageJson: PackageJson) => string
}

const REACT_PACKAGE_JSON_PATH = path.join(
  process.cwd(),
  "packages",
  "react",
  "package.json",
)
const CLI_PACKAGE_JSON_PATH = path.join(
  process.cwd(),
  "packages",
  "cli",
  "package.json",
)
const BUG_REPORT_PATH = path.join(
  process.cwd(),
  ".github",
  "ISSUE_TEMPLATE",
  "bug_report.yml",
)
const BUG_REPORT_JA_PATH = path.join(
  process.cwd(),
  ".github",
  "ISSUE_TEMPLATE",
  "bug_report.ja.yml",
)

const TEMPLATE_CONFIG: TemplateConfig[] = [
  {
    getDescription: function (reactPackageJson, cliPackageJson) {
      return `The version of the package you are using. Latest: ${reactPackageJson.name} ${reactPackageJson.version} / ${cliPackageJson.name} ${cliPackageJson.version}.`
    },
    getPlaceholder: function (reactPackageJson) {
      return `e.g. ${reactPackageJson.version}`
    },
    path: BUG_REPORT_PATH,
  },
  {
    getDescription: function (reactPackageJson, cliPackageJson) {
      return `使用しているパッケージのバージョン。最新: ${reactPackageJson.name} ${reactPackageJson.version} / ${cliPackageJson.name} ${cliPackageJson.version}。`
    },
    getPlaceholder: function (reactPackageJson) {
      return `例: ${reactPackageJson.version}`
    },
    path: BUG_REPORT_JA_PATH,
  },
]

function getPackageJson(filePath: string) {
  return JSON.parse(readFileSync(filePath, "utf-8")) as PackageJson
}

function updateVersionField(
  content: string,
  description: string,
  placeholder: string,
) {
  const pattern =
    /(id: version[\s\S]*?description:\s*)(?:"[^"\n]*"|[^\n]+)(\n\s+placeholder:\s*)(?:"[^"\n]*"|[^\n]+)/

  if (!pattern.test(content))
    throw new Error("Could not update the version field in the issue template.")

  return content.replace(
    pattern,
    `$1${JSON.stringify(description)}$2${JSON.stringify(placeholder)}`,
  )
}

function main() {
  const spinner = ora()
  const start = process.hrtime.bigint()

  spinner.start(`Getting package versions`)

  const reactPackageJson = getPackageJson(REACT_PACKAGE_JSON_PATH)
  const cliPackageJson = getPackageJson(CLI_PACKAGE_JSON_PATH)

  spinner.succeed(`Got package versions`)

  spinner.start(`Updating issue templates`)

  for (const template of TEMPLATE_CONFIG) {
    const content = readFileSync(template.path, "utf-8")
    const nextContent = updateVersionField(
      content,
      template.getDescription(reactPackageJson, cliPackageJson),
      template.getPlaceholder(reactPackageJson),
    )

    if (nextContent !== content) writeFileSync(template.path, nextContent)
  }

  spinner.succeed(`Updated issue templates`)

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
