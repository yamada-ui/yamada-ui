import type { Options } from "@emotion/cache"
import createEmotionCache from "@emotion/cache"
import { interopDefault } from "@yamada-ui/utils"
import { useServerInsertedHTML } from "next/navigation"
import { createElement, useMemo } from "react"

export type UseEmotionCacheProps = Partial<Options>

const createCache = interopDefault(createEmotionCache)

export const useEmotionCache = (options?: UseEmotionCacheProps) => {
  const cache = useMemo(() => {
    const cache = createCache({ key: "css", prepend: true, ...options })

    cache.compat = true

    return cache
  }, [options])

  useServerInsertedHTML(() => {
    const { key, inserted, nonce } = cache
    const __html = Object.values(inserted).join(" ")

    const props = {
      key,
      "data-emotion": `${key} ${Object.keys(inserted).join(" ")}`,
      nonce,
      dangerouslySetInnerHTML: { __html },
    }

    return createElement("style", props)
  })

  return cache
}
