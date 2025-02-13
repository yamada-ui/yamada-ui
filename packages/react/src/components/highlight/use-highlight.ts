import { useMemo } from "react"
import { isArray } from "../../utils"

interface Options {
  query: string | string[]
  text: string
}

export interface Chunk {
  match: boolean
  text: string
}

const escapeRegexp = (term: string): string =>
  term.replace(/[|\\{}()[\]^$+*?.-]/g, (char: string) => `\\${char}`)

const buildRegex = (query: string[]): RegExp | undefined => {
  query = query.filter(Boolean).map((text) => escapeRegexp(text.trim()))

  if (query.length) return new RegExp(`(${query.join("|")})`, "ig")
}

const highlightWords = ({ query, text }: Options): Chunk[] => {
  const regex = buildRegex(isArray(query) ? query : [query])

  if (!regex) return [{ match: false, text }]

  return text
    .split(regex)
    .filter(Boolean)
    .map((text) => ({ match: regex.test(text), text }))
}

export const useHighlight = ({ query, text }: Options): Chunk[] =>
  useMemo(() => highlightWords({ query, text }), [text, query])
