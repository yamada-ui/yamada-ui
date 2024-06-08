import { forwardRef } from "@yamada-ui/core"
import { CalendarCheck as CalendarCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarCheckProps = LucideIconProps

/**
 * `CalendarCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarCheck = forwardRef<CalendarCheckProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarCheckIcon} {...props} />,
)
