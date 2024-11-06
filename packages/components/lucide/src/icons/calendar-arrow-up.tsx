import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarArrowUp as LucideCalendarArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarArrowUpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarArrowUpIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarArrowUpIcon` instead.
 */
export const CalendarArrowUp = CalendarArrowUpIcon
