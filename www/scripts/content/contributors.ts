import type { RestEndpointMethodTypes } from "@octokit/rest"
import * as p from "@clack/prompts"
import { Octokit } from "@octokit/rest"
import c from "chalk"
import { CONSTANT } from "constant"
import { config } from "dotenv"
import { writeFile } from "fs/promises"
import { prettier } from "libs/prettier"
import path from "path"
import { getConstant } from "utils/github"

type Contributor = Awaited<
  ReturnType<typeof octokit.repos.listContributors>
>["data"][number]

config({ path: CONSTANT.PATH.ENV })

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

type Contributors =
  RestEndpointMethodTypes["repos"]["listContributors"]["response"]["data"]

const REPO_REQUEST_PARAMETERS = {
  owner: "yamada-ui",
  repo: "yamada-ui",
}

const getTeam: p.RequiredRunner = () => async (_, s) => {
  s.start(`Getting the Yamada UI team`)

  const constant = await getConstant()

  s.stop(`Got the Yamada UI team`)

  const { emeriti, maintainers } = constant

  return { emeriti, maintainers }
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
      page,
      per_page: 100,
    })

    contributors.push(...data)

    count = data.length

    page++
  } while (count === perPage)

  s.stop(`Got the Yamada UI contributors`)

  return contributors
}

const writeTeam: p.RequiredRunner =
  (maintainers: any, emeriti: any) => async (_, s) => {
    let distPath = path.join("constant", "maintainers.ts")

    s.start(`Writing file "${distPath}"`)

    let data = `export const MAINTAINERS = ${JSON.stringify(maintainers)}`

    data = await prettier(data, { parser: "typescript" })

    await writeFile(distPath, data)

    s.stop(`Wrote file "${distPath}"`)

    distPath = path.join("constant", "emeriti.ts")

    s.start(`Writing file "${distPath}"`)

    data = `export const EMERITI = ${JSON.stringify(emeriti)}`

    data = await prettier(data, { parser: "typescript" })

    await writeFile(distPath, data)

    s.stop(`Wrote file "${distPath}"`)
  }

const writeContributors: p.RequiredRunner =
  (contributors: Contributors) => async (_, s) => {
    const distPath = path.join("constant", "contributors.ts")

    s.start(`Writing file "${distPath}"`)

    const resolvedContributors = contributors.map(
      ({ id, avatar_url, html_url, login }) => ({
        id,
        name: login,
        icon: avatar_url,
        url: html_url,
      }),
    )

    let data = `export const CONTRIBUTORS = ${JSON.stringify(
      resolvedContributors,
    )}`

    data = await prettier(data, { parser: "typescript" })

    await writeFile(distPath, data)

    s.stop(`Wrote file "${distPath}"`)
  }

const main = async () => {
  p.intro(c.magenta(`Generating Yamada UI contributors`))

  const s = p.spinner()

  try {
    const start = process.hrtime.bigint()

    const { emeriti, maintainers } = await getTeam()(p, s)
    const contributors: Contributors = await getContributors()(p, s)

    const omitIds: string[] = [...maintainers, ...emeriti].map(
      ({ github }) => github.id,
    )
    const omittedContributors = contributors.filter(
      ({ type, login }) => type === "User" && login && !omitIds.includes(login),
    )

    await writeTeam(maintainers, emeriti)(p, s)
    await writeContributors(omittedContributors)(p, s)

    const end = process.hrtime.bigint()
    const duration = (Number(end - start) / 1e9).toFixed(2)

    p.outro(c.green(`Done in ${duration}s\n`))
  } catch (e) {
    s.stop(`An error occurred`, 500)

    p.cancel(c.red(e instanceof Error ? e.message : "Message is missing"))
  }
}

main()
