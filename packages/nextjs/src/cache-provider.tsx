'use client'

import { CacheProvider as EmotionCacheProvider } from '@emotion/react'
import { FC, PropsWithChildren } from 'react'
import { useEmotionCache, UseEmotionCacheProps } from './use-emotion-cache'

export type CacheProviderProps = PropsWithChildren<UseEmotionCacheProps>

export const CacheProvider: FC<CacheProviderProps> = ({ children, ...rest }) => {
  const cache = useEmotionCache(rest)

  return <EmotionCacheProvider value={cache}>{children}</EmotionCacheProvider>
}
