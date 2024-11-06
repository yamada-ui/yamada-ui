import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarPlus2 as LucideCalendarPlus2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarPlus2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarPlus2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarPlus2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarPlus2Icon` instead.
 */
export const CalendarPlus2 = CalendarPlus2Icon
