import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClockArrowUp as LucideClockArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClockArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockArrowUpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClockArrowUpIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClockArrowUpIcon` instead.
 */
export const ClockArrowUp = ClockArrowUpIcon
