import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SquareArrowOutDownRight as OriginalSquareArrowOutDownRight } from "lucide-react"

/**
 * `SquareArrowOutDownRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareArrowOutDownRightIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalSquareArrowOutDownRight} {...props} />
  ),
)

/**
 * `SquareArrowOutDownRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquareArrowOutDownRightIcon` instead.
 */
export const SquareArrowOutDownRight = SquareArrowOutDownRightIcon
