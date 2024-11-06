import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Timer as LucideTimerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TimerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TimerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTimerIcon} {...props} />
))

/**
 * @deprecated Use `TimerIcon` instead.
 */
export const Timer = TimerIcon
