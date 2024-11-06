import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ParkingMeter as LucideParkingMeterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ParkingMeterIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ParkingMeterIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideParkingMeterIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ParkingMeterIcon` instead.
 */
export const ParkingMeter = ParkingMeterIcon
