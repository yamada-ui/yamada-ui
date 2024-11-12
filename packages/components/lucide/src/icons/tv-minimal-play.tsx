import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { TvMinimalPlay as OriginalTvMinimalPlay } from "lucide-react"

/**
 * `TvMinimalPlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TvMinimalPlayIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalTvMinimalPlay} {...props} />
))

/**
 * `TvMinimalPlay` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `TvMinimalPlayIcon` instead.
 */
export const TvMinimalPlay = TvMinimalPlayIcon
