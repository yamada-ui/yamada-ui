import { Octokit } from "@octokit/rest"
import { config } from "dotenv"

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-docs" }

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const main = async () => {
  try {
    const { data: collaboratorsA } = await octokit.repos.listCollaborators({
      ...COMMON_PARAMS,
      permission: "maintain",
      per_page: 100,
    })

    console.log(collaboratorsA)

    const { data: collaboratorsB } = await octokit.repos.listCollaborators({
      ...COMMON_PARAMS,
      affiliation: "outside",
      per_page: 100,
    })

    console.log(collaboratorsB)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
