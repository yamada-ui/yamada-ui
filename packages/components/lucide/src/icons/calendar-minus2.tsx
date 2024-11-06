import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarMinus2 as LucideCalendarMinus2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarMinus2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarMinus2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarMinus2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarMinus2Icon` instead.
 */
export const CalendarMinus2 = CalendarMinus2Icon
