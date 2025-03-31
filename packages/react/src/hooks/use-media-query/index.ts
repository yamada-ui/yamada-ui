import { useEffect, useState } from "react"
import { useEnvironment } from "../../providers/environment-provider"
import { isArray, isFunction } from "../../utils"

export interface UseMediaQueryOptions {
  fallback?: boolean | boolean[]
  ssr?: boolean
}

/**
 * `useMediaQuery` is a custom hook that detects whether it matches a single or multiple media queries.
 *
 * @see https://yamada-ui.com/hooks/use-media-query
 */
export const useMediaQuery = (
  query: string | string[],
  { fallback, ssr = true }: UseMediaQueryOptions = {},
): boolean[] => {
  const { getWindow } = useEnvironment()

  const queries = isArray(query) ? query : [query]

  let fallbackValues = isArray(fallback) ? fallback : [fallback]

  fallbackValues = fallbackValues.filter((value) => value != null) as boolean[]

  const [value, setValue] = useState(() => {
    return queries.map((media, index) => ({
      matches: ssr
        ? !!fallbackValues[index]
        : !!getWindow()?.matchMedia(media).matches,
      media,
    }))
  })

  useEffect(() => {
    const win = getWindow()

    if (!win) return

    setValue(
      queries.map((media) => ({
        matches: win.matchMedia(media).matches,
        media,
      })),
    )

    const mql = queries.map((query) => win.matchMedia(query))

    const handler = (ev: MediaQueryListEvent) => {
      setValue((prev) =>
        prev.slice().map((item) => {
          if (item.media === ev.media) return { ...item, matches: ev.matches }

          return item
        }),
      )
    }

    mql.forEach((mq) => {
      if (isFunction(mq.addListener)) {
        mq.addListener(handler)
      } else {
        mq.addEventListener("change", handler)
      }
    })

    return () => {
      mql.forEach((mq) => {
        if (isFunction(mq.removeListener)) {
          mq.removeListener(handler)
        } else {
          mq.removeEventListener("change", handler)
        }
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getWindow])

  return value.map((item) => item.matches)
}
