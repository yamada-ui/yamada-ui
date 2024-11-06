import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlarmClockCheck as LucideAlarmClockCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlarmClockCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlarmClockCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlarmClockCheckIcon` instead.
 */
export const AlarmClockCheck = AlarmClockCheckIcon
