import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Clock as LucideClockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideClockIcon} {...props} />
))

/**
 * @deprecated Use `ClockIcon` instead.
 */
export const Clock = ClockIcon
