import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ALargeSmall as OriginalALargeSmall } from "lucide-react"

/**
 * `ALargeSmallIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ALargeSmallIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalALargeSmall} {...props} />
))

/**
 * `ALargeSmall` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ALargeSmallIcon` instead.
 */
export const ALargeSmall = ALargeSmallIcon
