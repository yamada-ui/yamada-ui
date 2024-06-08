import { forwardRef } from "@yamada-ui/core"
import { BatteryFull as BatteryFullIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BatteryFullProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryFull = forwardRef<BatteryFullProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BatteryFullIcon} {...props} />
))
