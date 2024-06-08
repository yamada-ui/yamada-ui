import { forwardRef } from "@yamada-ui/core"
import { CalendarX as CalendarXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarXProps = LucideIconProps

/**
 * `CalendarX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarX = forwardRef<CalendarXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CalendarXIcon} {...props} />
))
