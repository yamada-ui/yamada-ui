import { forwardRef } from "@yamada-ui/core"
import { BatteryCharging as BatteryChargingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BatteryChargingProps = LucideIconProps

/**
 * `BatteryCharging` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryCharging = forwardRef<BatteryChargingProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BatteryChargingIcon} {...props} />,
)
