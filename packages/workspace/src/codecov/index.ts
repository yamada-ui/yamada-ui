import { config } from "dotenv"

config()

const SERVICE_NAME = "github"
const OWNER_NAME = "yamada-ui"
const API_ENDPOINT = `https://codecov.io/api/v2/${SERVICE_NAME}/${OWNER_NAME}`

export async function codecov<Y>(target: string, options?: RequestInit) {
  const res = await fetch(API_ENDPOINT + target, {
    headers: {
      accept: "application/json",
      Authorization: `bearer ${process.env.CODECOV_API_TOKEN}`,
    },
    method: "GET",
    ...options,
  })
  const data = await res.json()

  return data as Y
}
