import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CornerLeftDown as OriginalCornerLeftDown } from "lucide-react"

/**
 * `CornerLeftDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerLeftDownIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalCornerLeftDown} {...props} />
))

/**
 * `CornerLeftDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CornerLeftDownIcon` instead.
 */
export const CornerLeftDown = CornerLeftDownIcon
