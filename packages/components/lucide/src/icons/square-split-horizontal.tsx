import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SquareSplitHorizontal as OriginalSquareSplitHorizontal } from "lucide-react"

/**
 * `SquareSplitHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareSplitHorizontalIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalSquareSplitHorizontal} {...props} />
  ),
)

/**
 * `SquareSplitHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquareSplitHorizontalIcon` instead.
 */
export const SquareSplitHorizontal = SquareSplitHorizontalIcon
