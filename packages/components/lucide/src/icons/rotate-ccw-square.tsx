import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { RotateCcwSquare as OriginalRotateCcwSquare } from "lucide-react"

/**
 * `RotateCcwSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RotateCcwSquareIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalRotateCcwSquare} {...props} />,
)

/**
 * `RotateCcwSquare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `RotateCcwSquareIcon` instead.
 */
export const RotateCcwSquare = RotateCcwSquareIcon
