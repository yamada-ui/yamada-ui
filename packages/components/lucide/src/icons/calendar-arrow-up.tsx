import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CalendarArrowUp as OriginalCalendarArrowUp } from "lucide-react"

/**
 * `CalendarArrowUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarArrowUpIcon = forwardRef<IconProps, "svg">(
  (props, ref) => <Icon ref={ref} as={OriginalCalendarArrowUp} {...props} />,
)

/**
 * `CalendarArrowUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CalendarArrowUpIcon` instead.
 */
export const CalendarArrowUp = CalendarArrowUpIcon
