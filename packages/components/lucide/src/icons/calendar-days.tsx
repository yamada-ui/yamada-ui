import { forwardRef } from "@yamada-ui/core"
import { CalendarDays as CalendarDaysIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarDaysProps = LucideIconProps

/**
 * `CalendarDays` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarDays = forwardRef<CalendarDaysProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarDaysIcon} {...props} />,
)
