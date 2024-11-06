import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BetweenHorizontalEnd as LucideBetweenHorizontalEndIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BetweenHorizontalEndIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BetweenHorizontalEndIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBetweenHorizontalEndIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BetweenHorizontalEndIcon` instead.
 */
export const BetweenHorizontalEnd = BetweenHorizontalEndIcon
