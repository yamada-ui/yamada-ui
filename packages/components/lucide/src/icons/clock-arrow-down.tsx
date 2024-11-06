import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClockArrowDown as LucideClockArrowDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClockArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockArrowDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideClockArrowDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ClockArrowDownIcon` instead.
 */
export const ClockArrowDown = ClockArrowDownIcon
