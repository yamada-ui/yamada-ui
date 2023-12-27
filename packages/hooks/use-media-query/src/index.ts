import { useEnvironment } from "@yamada-ui/providers"
import { isArray, isFunction } from "@yamada-ui/utils"
import { useEffect, useState } from "react"

export type UseMediaQueryOptions = {
  fallback?: boolean | boolean[]
  ssr?: boolean
}

/**
 * `useMediaQuery` is a custom hook that detects whether it matches a single or multiple media queries.
 *
 * @see Docs https://yamada-ui.com/hooks/use-media-query
 */
export const useMediaQuery = (
  query: string | string[],
  { ssr = true, fallback }: UseMediaQueryOptions = {},
): boolean[] => {
  const { getWindow } = useEnvironment()

  const queries = isArray(query) ? query : [query]

  let fallbackValues = isArray(fallback) ? fallback : [fallback]

  fallbackValues = fallbackValues.filter((value) => value != null) as boolean[]

  const [value, setValue] = useState(() => {
    return queries.map((media, index) => ({
      media,
      matches: ssr
        ? !!fallbackValues[index]
        : getWindow().matchMedia(media).matches,
    }))
  })

  useEffect(() => {
    const win = getWindow()

    setValue(
      queries.map((media) => ({
        media,
        matches: win.matchMedia(media).matches,
      })),
    )

    const mql = queries.map((query) => win.matchMedia(query))

    const handler = (evt: MediaQueryListEvent) => {
      setValue((prev) =>
        prev.slice().map((item) => {
          if (item.media === evt.media) return { ...item, matches: evt.matches }

          return item
        }),
      )
    }

    mql.forEach((mql) => {
      if (isFunction(mql.addListener)) {
        mql.addListener(handler)
      } else {
        mql.addEventListener("change", handler)
      }
    })

    return () => {
      mql.forEach((mql) => {
        if (isFunction(mql.removeListener)) {
          mql.removeListener(handler)
        } else {
          mql.removeEventListener("change", handler)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getWindow])

  return value.map((item) => item.matches)
}
