import { forwardRef } from "@yamada-ui/core"
import { CalendarMinus2 as CalendarMinus2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarMinus2Props = LucideIconProps

/**
 * `CalendarMinus2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarMinus2 = forwardRef<CalendarMinus2Props, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarMinus2Icon} {...props} />,
)
