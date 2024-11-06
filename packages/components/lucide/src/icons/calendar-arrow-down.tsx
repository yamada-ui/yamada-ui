import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarArrowDown as LucideCalendarArrowDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarArrowDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarArrowDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarArrowDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarArrowDownIcon` instead.
 */
export const CalendarArrowDown = CalendarArrowDownIcon
