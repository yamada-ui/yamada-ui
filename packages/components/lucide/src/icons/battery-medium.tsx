import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BatteryMedium as LucideBatteryMediumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryMediumIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryMediumIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBatteryMediumIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BatteryMediumIcon` instead.
 */
export const BatteryMedium = BatteryMediumIcon
