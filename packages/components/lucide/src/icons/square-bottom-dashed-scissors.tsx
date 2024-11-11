import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { SquareBottomDashedScissors as OriginalSquareBottomDashedScissors } from "lucide-react"

/**
 * `SquareBottomDashedScissorsIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SquareBottomDashedScissorsIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalSquareBottomDashedScissors} {...props} />
  ),
)

/**
 * `SquareBottomDashedScissors` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `SquareBottomDashedScissorsIcon` instead.
 */
export const SquareBottomDashedScissors = SquareBottomDashedScissorsIcon
