import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BetweenVerticalEnd as LucideBetweenVerticalEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BetweenVerticalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenVerticalEndIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBetweenVerticalEndIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BetweenVerticalEndIcon` instead.
 */
export const BetweenVerticalEnd = BetweenVerticalEndIcon
