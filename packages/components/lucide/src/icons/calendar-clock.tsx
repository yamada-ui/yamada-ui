import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarClock as CalendarClockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarClock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarClock = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarClockIcon} {...props} />,
)
