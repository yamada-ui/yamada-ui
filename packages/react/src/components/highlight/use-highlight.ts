import { useMemo } from "react"
import { toArray } from "../../utils"

export interface Chunk {
  match: boolean
  text: string
}

const escapeRegexp = (term: string): string =>
  term.replace(/[|\\{}()[\]^$+*?.-]/g, (char: string) => `\\${char}`)

const createRegexp = (query: string[]): RegExp | undefined => {
  query = query.filter(Boolean).map((text) => escapeRegexp(text.trim()))

  if (query.length) return new RegExp(`(${query.join("|")})`, "ig")
}

export interface UseHighlightProps {
  query: string | string[]
  text: string
}

export const useHighlight = ({ query, text }: UseHighlightProps) => {
  const chunks = useMemo(() => {
    const regexp = createRegexp(toArray(query))

    if (!regexp) return [{ match: false, text }]

    return text
      .split(regexp)
      .filter(Boolean)
      .map((text) => ({ match: regexp.test(text), text }))
  }, [text, query])

  return chunks
}

export type UseHighlightReturn = ReturnType<typeof useHighlight>
