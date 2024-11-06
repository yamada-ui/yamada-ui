import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarSearch as LucideCalendarSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarSearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarSearchIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarSearchIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarSearchIcon` instead.
 */
export const CalendarSearch = CalendarSearchIcon
