import { writeFile } from "fs/promises"
import path from "path"
import * as p from "@clack/prompts"
import type { RestEndpointMethodTypes } from "@octokit/rest"
import { Octokit } from "@octokit/rest"
import c from "chalk"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import { prettier } from "libs/prettier"

type Contributor = Awaited<
  ReturnType<typeof octokit.repos.listContributors>
>["data"][number]

config({ path: CONSTANT.PATH.ENV })

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

type Contributors =
  RestEndpointMethodTypes["repos"]["listContributors"]["response"]["data"]

const DIST_PATH = path.join("constant", "contributors.ts")
const REPO_REQUEST_PARAMETERS = {
  owner: "yamada-ui",
  repo: "yamada-ui",
}

const getContributors: p.RequiredRunner = () => async (_, s) => {
  s.start(`Getting the Yamada UI contributors`)

  let contributors: Contributor[] = []
  let page = 1
  let count = 0
  const perPage = 100

  do {
    const { data } = await octokit.repos.listContributors({
      ...REPO_REQUEST_PARAMETERS,
      per_page: 100,
      page,
    })

    contributors.push(...data)

    count = data.length

    page++
  } while (count === perPage)

  s.stop(`Got the Yamada UI contributors`)

  return contributors
}

const writeContributors: p.RequiredRunner =
  (contributors: Contributors) => async (_, s) => {
    s.start(`Writing file "${DIST_PATH}"`)

    const team = [
      ...CONSTANT.TEAM.MAINTAINERS.map(({ id }) => id),
      ...CONSTANT.TEAM.MEMBERS.map(({ id }) => id),
    ]

    const resolvedContributors = contributors
      .filter(
        ({ login, type }) => type === "User" && login && !team.includes(login),
      )
      .map(({ id, login, avatar_url, html_url }) => ({
        id,
        name: login,
        icon: avatar_url,
        url: html_url,
      }))

    let data = `export const CONTRIBUTORS = ${JSON.stringify(
      resolvedContributors,
    )}`

    data = await prettier(data, { parser: "typescript" })

    await writeFile(DIST_PATH, data)

    s.stop(`Wrote file "${DIST_PATH}"`)
  }

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI contributors`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const contributors = await getContributors()(p, s)

    await writeContributors(contributors)(p, s)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
