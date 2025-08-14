import type { Data } from "../index.type"
import { HttpsProxyAgent } from "https-proxy-agent"
import fetch from "node-fetch"
import path from "path"
import { REGISTRY_URL } from "../constant"

const agent = process.env.https_proxy
  ? new HttpsProxyAgent(process.env.https_proxy)
  : undefined

const registryStore = new Map<string, Data>()

function getRegistryUrl(name: string) {
  if (name === "index") {
    return path.join(REGISTRY_URL, "index.json")
  } else if (name.startsWith("use-")) {
    return path.join(REGISTRY_URL, "hooks", `${name}.json`)
  } else if (name.endsWith("-provider")) {
    return path.join(REGISTRY_URL, "providers", `${name}.json`)
  } else {
    return path.join(REGISTRY_URL, "components", `${name}.json`)
  }
}

export interface FetchRegistryOptions {
  cache?: boolean
}

export async function fetchRegistry(
  paths: string[],
  { cache = true }: FetchRegistryOptions = {},
) {
  return await Promise.all(
    paths.map(async (name) => {
      const url = getRegistryUrl(name)

      if (cache && registryStore.has(url)) return registryStore.get(url)!

      const res = await fetch(url, { agent })

      if (res.ok) {
        const data = (await res.json()) as Data

        if (cache) registryStore.set(url, data)

        return data
      } else {
        switch (res.status) {
          case 400:
          case 401:
          case 403:
            throw new Error(`You do not have access to the data at ${name}.`)
          case 404:
            throw new Error(
              `The data at ${name} was not found. Please make sure the data is available.`,
            )
          case 500:
          case 501:
          case 502:
          case 503:
            throw new Error(`Service unavailable. Please try again later.`)
          default:
            throw new Error(
              `An error occurred while fetching the data at ${name}. Please try again later.`,
            )
        }
      }
    }),
  )
}

export function pruneRegistry() {
  registryStore.clear()
}
