import { useEnvironment } from "@yamada-ui/core"
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
        : !!getWindow()?.matchMedia(media).matches,
    }))
  })

  useEffect(() => {
    const win = getWindow()

    if (!win) return

    setValue(
      queries.map((media) => ({
        media,
        matches: win.matchMedia(media).matches,
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
