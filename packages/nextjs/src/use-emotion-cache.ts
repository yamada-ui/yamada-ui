import createEmotionCache, { Options } from "@emotion/cache"
import { useServerInsertedHTML } from "next/navigation"
import { createElement, useMemo } from "react"

export type UseEmotionCacheProps = Partial<Options>

const createCache = ((createEmotionCache as any).default ??
  createEmotionCache) as typeof createEmotionCache

export const useEmotionCache = (options?: UseEmotionCacheProps) => {
  const cache = useMemo(() => {
    const cache = createCache({ key: "css", prepend: true, ...options })

    cache.compat = true

    return cache
  }, [options])

  useServerInsertedHTML(() => {
    const { key, inserted } = cache

    const props = {
      key,
      "data-emotion": `${key} ${Object.keys(inserted).join(" ")}`,
      dangerouslySetInnerHTML: { __html: Object.values(inserted).join(" ") },
    }

    return createElement("style", props)
  })

  return cache
}
