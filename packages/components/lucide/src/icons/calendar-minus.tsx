import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarMinus as CalendarMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarMinus = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarMinusIcon} {...props} />,
)
