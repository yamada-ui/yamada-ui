import { CacheProvider as EmotionCacheProvider } from "@emotion/react"
import type { FC, PropsWithChildren } from "react"
import type { UseEmotionCacheProps } from "./use-emotion-cache"
import { useEmotionCache } from "./use-emotion-cache"

/**
 * @deprecated This component type is no longer necessary
 */
export type CacheProviderProps = PropsWithChildren<UseEmotionCacheProps>

/**
 * @deprecated This component is no longer necessary
 */
export const CacheProvider: FC<CacheProviderProps> = ({
  children,
  ...rest
}) => {
  const cache = useEmotionCache(rest)

  return <EmotionCacheProvider value={cache}>{children}</EmotionCacheProvider>
}
