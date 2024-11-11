import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { ShieldEllipsis as OriginalShieldEllipsis } from "lucide-react"

/**
 * `ShieldEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShieldEllipsisIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalShieldEllipsis} {...props} />
))

/**
 * `ShieldEllipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `ShieldEllipsisIcon` instead.
 */
export const ShieldEllipsis = ShieldEllipsisIcon
