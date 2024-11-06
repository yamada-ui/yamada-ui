import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarOff as LucideCalendarOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarOffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarOffIcon` instead.
 */
export const CalendarOff = CalendarOffIcon
