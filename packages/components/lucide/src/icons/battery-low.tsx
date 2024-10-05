import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BatteryLow as BatteryLowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryLow` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryLow = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BatteryLowIcon} {...props} />
))
