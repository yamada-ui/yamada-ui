import { forwardRef } from "@yamada-ui/core"
import { BatteryMedium as BatteryMediumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BatteryMediumProps = LucideIconProps

/**
 * `BatteryMedium` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryMedium = forwardRef<BatteryMediumProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BatteryMediumIcon} {...props} />,
)
