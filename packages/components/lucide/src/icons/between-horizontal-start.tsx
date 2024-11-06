import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BetweenHorizontalStart as LucideBetweenHorizontalStartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BetweenHorizontalStartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenHorizontalStartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBetweenHorizontalStartIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BetweenHorizontalStartIcon` instead.
 */
export const BetweenHorizontalStart = BetweenHorizontalStartIcon
