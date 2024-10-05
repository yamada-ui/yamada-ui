import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BatteryCharging as BatteryChargingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryCharging` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryCharging = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BatteryChargingIcon} {...props} />,
)
