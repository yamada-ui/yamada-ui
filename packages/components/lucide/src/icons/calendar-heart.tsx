import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarHeart as LucideCalendarHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarHeartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarHeartIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarHeartIcon` instead.
 */
export const CalendarHeart = CalendarHeartIcon
