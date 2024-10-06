import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarCog as CalendarCogIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarCog` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarCog = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CalendarCogIcon} {...props} />
))
