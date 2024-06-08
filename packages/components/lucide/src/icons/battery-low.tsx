import { forwardRef } from "@yamada-ui/core"
import { BatteryLow as BatteryLowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BatteryLowProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryLow = forwardRef<BatteryLowProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BatteryLowIcon} {...props} />
))
