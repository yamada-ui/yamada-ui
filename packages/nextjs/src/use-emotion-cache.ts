import emotion_createCache, { Options } from '@emotion/cache'
import { useServerInsertedHTML } from 'next/navigation'
import { createElement, useMemo } from 'react'

export type UseEmotionCacheProps = Partial<Options>

const createCache = ((emotion_createCache as any).default ??
  emotion_createCache) as typeof emotion_createCache

export const useEmotionCache = (options?: UseEmotionCacheProps) => {
  const cache = useMemo(() => {
    const cache = createCache({ key: 'css', prepend: true, ...options })

    cache.compat = true

    return cache
  }, [options])

  useServerInsertedHTML(() => {
    const { key, inserted } = cache

    const props = {
      key,
      'data-emotion': `${key} ${Object.keys(inserted).join(' ')}`,
      dangerouslySetInnerHTML: { __html: Object.values(inserted).join(' ') },
    }

    return createElement('style', props)
  })

  return cache
}
