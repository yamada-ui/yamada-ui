import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CalendarPlus as CalendarPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CalendarPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarPlus = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={CalendarPlusIcon} {...props} />
))
