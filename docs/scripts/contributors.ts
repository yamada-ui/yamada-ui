import { writeFile } from "fs/promises"
import path from "path"
import * as p from "@clack/prompts"
import type { RestEndpointMethodTypes } from "@octokit/rest"
import { Octokit } from "@octokit/rest"
import c from "chalk"
import { config } from "dotenv"
import { CONSTANT } from "constant"
import { prettier } from "libs/prettier"

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

type Contributors =
  RestEndpointMethodTypes["repos"]["listContributors"]["response"]["data"]

const DIST_PATH = path.join("constant", "contributors.ts")

const REPO_REQUEST_PARAMETERS = {
  owner: "hirotomoyamada",
  repo: "yamada-ui",
}

const getContributors: p.RequiredRunner = () => async (p, s) => {
  s.start(`Getting the Yamada UI contributors`)

  const { data } = await octokit.repos.listContributors(REPO_REQUEST_PARAMETERS)

  s.stop(`got the Yamada UI contributors`)

  return data
}

const writeContributors: p.RequiredRunner =
  (contributors: Contributors) => async (p, s) => {
    s.start(`Writing file "${DIST_PATH}"`)

    const coreMembers = CONSTANT.CORE_MEMBERS.map(({ id }) => id)

    const resolvedContributors = contributors
      .filter(
        ({ login, type }) => type === "User" && !coreMembers.includes(login),
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
