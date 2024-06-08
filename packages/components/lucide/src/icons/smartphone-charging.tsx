import { forwardRef } from "@yamada-ui/core"
import { SmartphoneCharging as SmartphoneChargingIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SmartphoneChargingProps = LucideIconProps

/**
 * `SmartphoneCharging` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SmartphoneCharging = forwardRef<SmartphoneChargingProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={SmartphoneChargingIcon} {...props} />
  ),
)
