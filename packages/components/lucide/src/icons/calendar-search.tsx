import { forwardRef } from "@yamada-ui/core"
import { CalendarSearch as CalendarSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarSearchProps = LucideIconProps

/**
 * `CalendarSearch` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarSearch = forwardRef<CalendarSearchProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarSearchIcon} {...props} />,
)
