import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BetweenVerticalStart as LucideBetweenVerticalStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BetweenVerticalStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenVerticalStartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBetweenVerticalStartIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BetweenVerticalStartIcon` instead.
 */
export const BetweenVerticalStart = BetweenVerticalStartIcon
