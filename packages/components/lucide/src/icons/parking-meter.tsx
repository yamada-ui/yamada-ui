import { forwardRef } from "@yamada-ui/core"
import { ParkingMeter as ParkingMeterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ParkingMeterProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ParkingMeter = forwardRef<ParkingMeterProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ParkingMeterIcon} {...props} />,
)
