import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { RectangleEllipsis as OriginalRectangleEllipsis } from "lucide-react"

/**
 * `RectangleEllipsisIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RectangleEllipsisIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalRectangleEllipsis} {...props} />,
)

/**
 * `RectangleEllipsis` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `RectangleEllipsisIcon` instead.
 */
export const RectangleEllipsis = RectangleEllipsisIcon
