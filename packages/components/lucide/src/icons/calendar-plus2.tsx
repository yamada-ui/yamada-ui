import type { IconProps } from "@yamada-ui/icon"
import { forwardRef } from "@yamada-ui/core"
import { Icon } from "@yamada-ui/icon"
import { CalendarPlus2 as OriginalCalendarPlus2 } from "lucide-react"

/**
 * `CalendarPlus2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarPlus2Icon = forwardRef<IconProps, "svg">((props, ref) => (
  <Icon ref={ref} as={OriginalCalendarPlus2} {...props} />
))

/**
 * `CalendarPlus2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 *
 * @deprecated Use `CalendarPlus2Icon` instead.
 */
export const CalendarPlus2 = CalendarPlus2Icon
