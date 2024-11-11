import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { PaintbrushVertical as OriginalPaintbrushVertical } from "lucide-react"

/**
 * `PaintbrushVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintbrushVerticalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalPaintbrushVertical} {...props} />,
)

/**
 * `PaintbrushVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `PaintbrushVerticalIcon` instead.
 */
export const PaintbrushVertical = PaintbrushVerticalIcon
