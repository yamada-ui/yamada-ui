import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { BetweenVerticalEnd as OriginalBetweenVerticalEnd } from "lucide-react"

/**
 * `BetweenVerticalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenVerticalEndIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalBetweenVerticalEnd} {...props} />,
)

/**
 * `BetweenVerticalEnd` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `BetweenVerticalEndIcon` instead.
 */
export const BetweenVerticalEnd = BetweenVerticalEndIcon
