import { del, get, list, put } from "@vercel/blob"
import packageJson from "../../packages/react/package.json"

export const REGISTRY_VERSION = Number(packageJson.version.split(".")[0])
const REGISTRY_PREFIX = `v${REGISTRY_VERSION}`
export const REGISTRY_TAGS = ["latest", "dev", "next"] as const

export type RegistryTag = (typeof REGISTRY_TAGS)[number]

export function isRegistryTag(tag: string): tag is RegistryTag {
  return REGISTRY_TAGS.some((value) => value === tag)
}

export async function publishRegistry(
  tag: RegistryTag,
  files: { content: string; pathname: string }[],
) {
  const prefix = `${REGISTRY_PREFIX}/${tag}/`
  const pathnames = new Set(files.map(({ pathname }) => `${prefix}${pathname}`))

  for (let index = 0; index < files.length; index += 10)
    await Promise.all(
      files.slice(index, index + 10).map(({ content, pathname }) =>
        put(`${prefix}${pathname}`, content, {
          access: "private",
          addRandomSuffix: false,
          allowOverwrite: true,
          cacheControlMaxAge: 60,
          contentType: "application/json",
        }),
      ),
    )

  const obsolete: string[] = []
  let cursor: string | undefined

  do {
    const result = await list({ cursor, prefix })

    for (const { pathname } of result.blobs)
      if (!pathnames.has(pathname)) obsolete.push(pathname)

    cursor = result.hasMore ? result.cursor : undefined
  } while (cursor)

  for (let index = 0; index < obsolete.length; index += 1000)
    await del(obsolete.slice(index, index + 1000))
}

export async function getRegistry(tag: RegistryTag, pathname: string) {
  if (!/^(?:[a-z0-9-]+\/)*[a-z0-9.-]+\.json$/.test(pathname)) return null

  const result = await get(`${REGISTRY_PREFIX}/${tag}/${pathname}`, {
    access: "private",
    useCache: false,
  })

  if (result?.statusCode !== 200) return null

  return new Response(result.stream, {
    headers: {
      "Cache-Control": "no-store",
      "Content-Type": "application/json; charset=utf-8",
      "X-Registry-Version": `v${REGISTRY_VERSION}`,
    },
  })
}
