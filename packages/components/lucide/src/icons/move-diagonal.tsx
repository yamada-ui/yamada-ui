import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { MoveDiagonal as OriginalMoveDiagonal } from "lucide-react"

/**
 * `MoveDiagonalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDiagonalIcon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalMoveDiagonal} {...props} />
))

/**
 * `MoveDiagonal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `MoveDiagonalIcon` instead.
 */
export const MoveDiagonal = MoveDiagonalIcon
