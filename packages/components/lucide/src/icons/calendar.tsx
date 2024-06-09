import { forwardRef } from "@yamada-ui/core"
import { Calendar as CalendarIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarProps = LucideIconProps

/**
 * `Calendar` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Calendar = forwardRef<CalendarProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CalendarIcon} {...props} />
))
