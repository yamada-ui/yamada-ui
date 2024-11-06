import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { TimerOff as LucideTimerOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TimerOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TimerOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTimerOffIcon} {...props} />
))

/**
 * @deprecated Use `TimerOffIcon` instead.
 */
export const TimerOff = TimerOffIcon
