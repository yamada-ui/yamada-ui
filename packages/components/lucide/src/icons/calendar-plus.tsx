import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarPlus as LucideCalendarPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarPlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarPlusIcon` instead.
 */
export const CalendarPlus = CalendarPlusIcon
