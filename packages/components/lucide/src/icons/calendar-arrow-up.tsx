import { forwardRef } from "@yamada-ui/core"
import { CalendarArrowUp as CalendarArrowUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarArrowUpProps = LucideIconProps

/**
 * `CalendarArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarArrowUp = forwardRef<CalendarArrowUpProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarArrowUpIcon} {...props} />,
)
