import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SquareArrowDownLeft as OriginalSquareArrowDownLeft } from "lucide-react"

/**
 * `SquareArrowDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowDownLeftIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalSquareArrowDownLeft} {...props} />
  ),
)

/**
 * `SquareArrowDownLeft` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquareArrowDownLeftIcon` instead.
 */
export const SquareArrowDownLeft = SquareArrowDownLeftIcon
