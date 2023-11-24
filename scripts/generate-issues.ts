import { Octokit } from "@octokit/rest"
import { config } from "dotenv"
import { findPackages } from "find-packages"

type Issue = { title: string; body: string; labels: string[] }

const COMMON_PARAMS = { owner: "hirotomoyamada", repo: "yamada-ui" }

config()

const octokit = new Octokit({ auth: process.env.PAT_TOKEN })

const generateIssues = async (issues: Issue[]) => {
  for (const { title, body, labels } of issues) {
    await octokit.issues.create({ ...COMMON_PARAMS, title, body, labels })

    await new Promise((resolve) => setTimeout(resolve, 3000))
  }
}

const getIssues = async () => {
  const packages = await findPackages("packages/components")

  const issues: Issue[] = packages.map(({ manifest }) => {
    let { name } = manifest

    name = `\`${name}\``

    return {
      title: `Add tests for ${name}`,
      body: [
        `### Description`,
        `Currently, no tests in ${name}. In the future, I feel the need for testing when operating ${name}.`,
        "### Problem Statement/Justification",
        "Testing is essential to ensure quality when operating a package.",
      ].join("\n\n"),
      labels: ["enhancement", "good first issue"],
    }
  })

  return issues
}

const main = async () => {
  try {
    const issues = await getIssues()

    await generateIssues(issues)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
