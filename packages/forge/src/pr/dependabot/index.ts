import type { Dict } from "@yamada-ui/utils"
import { execFile } from "node:child_process"
import { existsSync } from "node:fs"
import { readFile, writeFile } from "node:fs/promises"
import path from "node:path"
import { promisify } from "node:util"

const execFileAsync = promisify(execFile)

const CHANGESET_PATH = path.resolve("..", "..", ".changeset")
const PACKAGES_PATH = path.resolve("..")

interface UpdatedDependency {
  alertState: string
  compatScore: number
  cvss: number
  dependencyGroup: string
  dependencyName: string
  dependencyType: string
  directory: string
  ghsaId: string
  maintainerChanges: boolean
  newVersion: string
  packageEcosystem: string
  prevVersion: string
  targetBranch: string
  updateType: string
}

const prNumber = process.env.PR_NUMBER

if (!prNumber) {
  console.error("PR number is not provided. Exiting.")
  process.exit(1)
}

const updatedDependencies = JSON.parse(
  process.env.UPDATED_DEPENDENCIES_JSON ||
    '[{"dependencyName": "lucide-react"}]',
) as UpdatedDependency[]

if (updatedDependencies.length === 0) {
  console.log("No updated dependencies found. Exiting.")
  process.exit(0)
}

const updatedDependencyNames = updatedDependencies.map(
  ({ dependencyName }) => dependencyName,
)

function createChangeset(packageName: string, description: string) {
  return `---
"@yamada-ui/${packageName}": patch
---

${description}
`
}

async function updateIcons() {
  if (!updatedDependencyNames.includes("lucide-react")) return

  const filePath = path.join(CHANGESET_PATH, `dependabot-icons-${prNumber}.md`)

  if (existsSync(filePath)) {
    console.log(
      `Changeset for icons already exists for PR #${prNumber}. Skipping icon update.`,
    )

    return
  }

  await execFileAsync("pnpm", [
    "-C",
    path.join(PACKAGES_PATH, "react"),
    "gen:icons",
  ])

  await writeFile(filePath, createChangeset("react", "Updated icons."))
}

async function updateStyles() {
  if (
    !updatedDependencyNames.includes("web-features") &&
    !updatedDependencyNames.includes("@mdn/browser-compat-data") &&
    !updatedDependencyNames.includes("csstype")
  )
    return

  const filePath = path.join(CHANGESET_PATH, `dependabot-styles-${prNumber}.md`)

  if (existsSync(filePath)) {
    console.log(
      `Changeset for styles already exists for PR #${prNumber}. Skipping style update.`,
    )

    return
  }

  await execFileAsync("pnpm", [
    "-C",
    path.join(PACKAGES_PATH, "react"),
    "gen:styles",
  ])

  await writeFile(filePath, createChangeset("react", "Updated style props."))
}

async function updateDependencies(packageName: string) {
  const packageJson = await readFile(
    path.join(PACKAGES_PATH, packageName, "package.json"),
    "utf-8",
  )
  const dependencies = JSON.parse(packageJson).dependencies as Dict<string>
  const dependencyNames = Object.keys(dependencies)

  if (
    !updatedDependencyNames.some((dependency) =>
      dependencyNames.includes(dependency),
    )
  ) {
    return
  }

  const filePath = path.join(
    CHANGESET_PATH,
    `dependabot-${packageName}-dependencies-${prNumber}.md`,
  )

  if (existsSync(filePath)) {
    console.log(
      `Changeset for dependencies already exists for PR #${prNumber}. Skipping ${packageName} dependency update.`,
    )

    return
  }

  await writeFile(
    filePath,
    createChangeset(packageName, "Updated dependencies."),
  )
}

async function main() {
  await Promise.all([
    updateIcons(),
    updateStyles(),
    updateDependencies("cli"),
    updateDependencies("react"),
    updateDependencies("utils"),
  ])
}

main()
