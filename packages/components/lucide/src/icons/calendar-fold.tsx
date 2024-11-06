import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarFold as LucideCalendarFoldIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarFoldIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarFoldIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarFoldIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarFoldIcon` instead.
 */
export const CalendarFold = CalendarFoldIcon
