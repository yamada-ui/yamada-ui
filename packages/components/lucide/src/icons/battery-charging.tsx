import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BatteryCharging as LucideBatteryChargingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryChargingIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryChargingIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBatteryChargingIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BatteryChargingIcon` instead.
 */
export const BatteryCharging = BatteryChargingIcon
