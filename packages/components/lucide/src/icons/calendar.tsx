import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Calendar as LucideCalendarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideCalendarIcon} {...props} />
))

/**
 * @deprecated Use `CalendarIcon` instead.
 */
export const Calendar = CalendarIcon
