import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarCheck2 as LucideCalendarCheck2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarCheck2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarCheck2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCalendarCheck2Icon} {...props} />
  ),
)

/**
 * @deprecated Use `CalendarCheck2Icon` instead.
 */
export const CalendarCheck2 = CalendarCheck2Icon
