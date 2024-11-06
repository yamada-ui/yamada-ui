import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BatteryWarning as LucideBatteryWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryWarningIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBatteryWarningIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BatteryWarningIcon` instead.
 */
export const BatteryWarning = BatteryWarningIcon
