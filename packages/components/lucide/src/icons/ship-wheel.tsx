import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ShipWheel as LucideShipWheelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShipWheelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShipWheelIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideShipWheelIcon} {...props} />,
)

/**
 * @deprecated Use `ShipWheelIcon` instead.
 */
export const ShipWheel = ShipWheelIcon
