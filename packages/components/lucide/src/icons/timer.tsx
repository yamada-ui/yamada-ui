import { forwardRef } from "@yamada-ui/core"
import { Timer as TimerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TimerProps = LucideIconProps

/**
 * `Timer` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Timer = forwardRef<TimerProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TimerIcon} {...props} />
))
