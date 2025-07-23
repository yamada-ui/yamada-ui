import type { EmotionCache } from "@emotion/utils"
import type { Dict } from "@yamada-ui/utils"
import type { ForwardedRef, ReactNode } from "react"

declare module "@emotion/react" {
  export function withEmotionCache(
    func: (
      props: Dict,
      context: EmotionCache,
      ref: ForwardedRef<any>,
    ) => ReactNode,
  ): FC<Dict>
}
