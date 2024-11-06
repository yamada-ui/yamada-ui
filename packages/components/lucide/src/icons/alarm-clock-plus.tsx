import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlarmClockPlus as LucideAlarmClockPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlarmClockPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideAlarmClockPlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `AlarmClockPlusIcon` instead.
 */
export const AlarmClockPlus = AlarmClockPlusIcon
