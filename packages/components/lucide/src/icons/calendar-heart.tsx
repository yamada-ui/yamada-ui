import { forwardRef } from "@yamada-ui/core"
import { CalendarHeart as CalendarHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type CalendarHeartProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CalendarHeart = forwardRef<CalendarHeartProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CalendarHeartIcon} {...props} />,
)
