import { forwardRef } from "@yamada-ui/core"
import { CalendarArrowDown as CalendarArrowDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `CalendarArrowDown` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarArrowDown = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={CalendarArrowDownIcon} {...props} />
  ),
)
