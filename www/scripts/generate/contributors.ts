import type { Dict } from "@yamada-ui/utils"
import { Octokit } from "@octokit/rest"
import { config } from "dotenv"
import ora from "ora"
import path from "path"
import c from "picocolors"
import { getContent, retryOnRateLimit } from "@/libs/octokit"
import { writeFileWithFormat } from "@/libs/prettier"

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

type Contributor = Awaited<
  ReturnType<typeof octokit.repos.listContributors>
>["data"][number]

async function getCollaborators() {
  return Object.fromEntries(
    await Promise.all(
      ["maintainers.json", "emeriti.json"].map((path) =>
        getContent<Dict[]>({ path, repo: "yamada-data" }),
      ),
    ),
  )
}

async function getContributors() {
  let contributors: Contributor[] = []
  let page = 1
  let count = 0
  const perPage = 100

  do {
    const { data } = await retryOnRateLimit(async () =>
      octokit.repos.listContributors({
        owner: "yamada-ui",
        page,
        per_page: 100,
        repo: "yamada-ui",
      }),
    )

    contributors.push(...data)

    count = data.length

    page++
  } while (count === perPage)

  return contributors
}

async function main() {
  const spinner = ora()

  const start = process.hrtime.bigint()

  spinner.start(`Getting maintainers`)

  const { emeriti, maintainers } = await getCollaborators()

  spinner.succeed(`Got maintainers`)

  spinner.start(`Getting contributors`)

  const contributors = await getContributors()
  const collaboratorIds: string[] = [...maintainers!, ...emeriti!].map(
    ({ github }) => github.id,
  )
  const omittedContributors = contributors
    .filter(
      ({ type, login }) =>
        type === "User" && login && !collaboratorIds.includes(login),
    )
    .map(({ id, avatar_url, html_url, login }) => ({
      id,
      avatar_url,
      html_url,
      login,
    }))

  spinner.succeed(`Got contributors`)

  spinner.start("Write data")

  await writeFileWithFormat(
    path.resolve("data", "maintainers.json"),
    maintainers,
  )
  await writeFileWithFormat(path.resolve("data", "emeriti.json"), emeriti)
  await writeFileWithFormat(
    path.resolve("data", "contributors.json"),
    omittedContributors,
  )

  spinner.succeed("Wrote data")

  const end = process.hrtime.bigint()
  const duration = (Number(end - start) / 1e9).toFixed(2)

  console.log("\n", c.green(`Done in ${duration}s`))
}

main()
