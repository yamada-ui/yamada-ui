import type { EmotionCache } from "@emotion/utils"
import type { Dict } from "@yamada-ui/utils"
import type { ForwardedRef, ReactNode } from "react"

declare module "@emotion/react" {
  export function withEmotionCache<Y extends Dict>(
    func: (
      props: Y,
      context: EmotionCache,
      ref: ForwardedRef<any>,
    ) => ReactNode,
  ): FC<Y>
}
