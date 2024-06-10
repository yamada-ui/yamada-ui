import { forwardRef } from "@yamada-ui/core"
import { CalendarX2 as CalendarX2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarX2Props = LucideIconProps

/**
 * `CalendarX2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarX2 = forwardRef<CalendarX2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CalendarX2Icon} {...props} />
))
