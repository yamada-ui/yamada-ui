import { forwardRef } from "@yamada-ui/core"
import { CalendarFold as CalendarFoldIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarFoldProps = LucideIconProps

/**
 * `CalendarFold` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarFold = forwardRef<CalendarFoldProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarFoldIcon} {...props} />,
)
