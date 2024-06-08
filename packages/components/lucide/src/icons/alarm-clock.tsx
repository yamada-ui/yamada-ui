import { forwardRef } from "@yamada-ui/core"
import { AlarmClock as AlarmClockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AlarmClockProps = LucideIconProps

/**
 * `AlarmClock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AlarmClock = forwardRef<AlarmClockProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AlarmClockIcon} {...props} />
))
