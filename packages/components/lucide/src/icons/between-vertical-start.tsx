import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BetweenVerticalStart as OriginalBetweenVerticalStart } from "lucide-react"

/**
 * `BetweenVerticalStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenVerticalStartIcon = forwardRef<IconProps, "svg">(
  (props, ref) => (
    <Icon ref={ref} as={OriginalBetweenVerticalStart} {...props} />
  ),
)

/**
 * `BetweenVerticalStart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BetweenVerticalStartIcon` instead.
 */
export const BetweenVerticalStart = BetweenVerticalStartIcon
