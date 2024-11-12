import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CornerUpLeft as OriginalCornerUpLeft } from "lucide-react"

/**
 * `CornerUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerUpLeftIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalCornerUpLeft} {...props} />
))

/**
 * `CornerUpLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CornerUpLeftIcon` instead.
 */
export const CornerUpLeft = CornerUpLeftIcon
