import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ClockAlert as LucideClockAlertIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ClockAlertIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ClockAlertIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideClockAlertIcon} {...props} />,
)

/**
 * @deprecated Use `ClockAlertIcon` instead.
 */
export const ClockAlert = ClockAlertIcon
