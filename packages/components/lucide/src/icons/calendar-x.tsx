import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarX as LucideCalendarXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarXIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCalendarXIcon} {...props} />,
)

/**
 * @deprecated Use `CalendarXIcon` instead.
 */
export const CalendarX = CalendarXIcon
