import { forwardRef } from "@yamada-ui/core"
import { CalendarPlus2 as CalendarPlus2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarPlus2Props = LucideIconProps

/**
 * `CalendarPlus2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarPlus2 = forwardRef<CalendarPlus2Props, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarPlus2Icon} {...props} />,
)
