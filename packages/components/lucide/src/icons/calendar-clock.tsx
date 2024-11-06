import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarClock as LucideCalendarClockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarClockIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarClockIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarClockIcon` instead.
 */
export const CalendarClock = CalendarClockIcon
