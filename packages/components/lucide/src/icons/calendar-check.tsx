import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarCheck as LucideCalendarCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarCheckIcon` instead.
 */
export const CalendarCheck = CalendarCheckIcon
