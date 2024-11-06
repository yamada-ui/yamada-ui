import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarCog as LucideCalendarCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarCogIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarCogIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarCogIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarCogIcon` instead.
 */
export const CalendarCog = CalendarCogIcon
