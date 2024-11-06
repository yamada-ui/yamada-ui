import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BatteryLow as LucideBatteryLowIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryLowIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryLowIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBatteryLowIcon} {...props} />,
)

/**
 * @deprecated Use `BatteryLowIcon` instead.
 */
export const BatteryLow = BatteryLowIcon
