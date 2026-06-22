import { parse } from "yaml"

const regex = /^---\r?\n([\s\S]*?)\r?\n---(?:\r?\n|$)/

export function matter(content: string) {
  const match = content.match(regex)

  if (!match) return { content, data: {} as { [key: string]: any } }

  return {
    content: content.slice(match[0].length),
    data: (parse(match[1] ?? "") ?? {}) as { [key: string]: any },
  }
}
