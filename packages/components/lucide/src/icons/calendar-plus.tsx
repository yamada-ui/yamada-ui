import { forwardRef } from "@yamada-ui/core"
import { CalendarPlus as CalendarPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarPlusProps = LucideIconProps

/**
 * `CalendarPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarPlus = forwardRef<CalendarPlusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarPlusIcon} {...props} />,
)
