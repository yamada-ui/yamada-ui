import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarX2 as LucideCalendarX2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarX2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarX2Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideCalendarX2Icon} {...props} />,
)

/**
 * @deprecated Use `CalendarX2Icon` instead.
 */
export const CalendarX2 = CalendarX2Icon
