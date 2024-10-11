import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BatteryMedium as BatteryMediumIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BatteryMedium` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BatteryMedium = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BatteryMediumIcon} {...props} />,
)
