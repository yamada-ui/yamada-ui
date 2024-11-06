import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AlarmSmoke as LucideAlarmSmokeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AlarmSmokeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmSmokeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideAlarmSmokeIcon} {...props} />,
)

/**
 * @deprecated Use `AlarmSmokeIcon` instead.
 */
export const AlarmSmoke = AlarmSmokeIcon
