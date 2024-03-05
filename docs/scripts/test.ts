import { Octokit } from "@octokit/rest"
import { config } from "dotenv"

const COMMON_PARAMS = { owner: "yamada-ui", repo: "yamada-docs" }

config()

const octokit = new Octokit({ auth: process.env.GITHUB_TOKEN })

const main = async () => {
  try {
    const { data: members } = await octokit.orgs.listMembers({
      org: "yamada-ui",
      per_page: 100,
    })

    console.log(members)

    const { data: collaborators } = await octokit.repos.listCollaborators({
      ...COMMON_PARAMS,
      permission: "push",
      per_page: 100,
    })

    console.log(collaborators)
  } catch (e) {
    if (e instanceof Error) console.log(e.message)
  }
}

main()
