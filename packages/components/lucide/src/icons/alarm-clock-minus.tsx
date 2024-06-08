import { forwardRef } from "@yamada-ui/core"
import { AlarmClockMinus as AlarmClockMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlarmClockMinusProps = LucideIconProps

/**
 * `AlarmClockMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClockMinus = forwardRef<AlarmClockMinusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={AlarmClockMinusIcon} {...props} />,
)
