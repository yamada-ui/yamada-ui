import { forwardRef } from "@yamada-ui/core"
import { TimerReset as TimerResetIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TimerResetProps = LucideIconProps

/**
 * `TimerReset` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TimerReset = forwardRef<TimerResetProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TimerResetIcon} {...props} />
))
