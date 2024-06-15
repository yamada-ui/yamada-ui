import { forwardRef } from "@yamada-ui/core"
import { AlarmClockOff as AlarmClockOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlarmClockOffProps = LucideIconProps

/**
 * `AlarmClockOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockOff = forwardRef<AlarmClockOffProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={AlarmClockOffIcon} {...props} />,
)
