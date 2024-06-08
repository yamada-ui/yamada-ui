import { forwardRef } from "@yamada-ui/core"
import { ShipWheel as ShipWheelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type ShipWheelProps = LucideIconProps

/**
 * `ShipWheel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShipWheel = forwardRef<ShipWheelProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={ShipWheelIcon} {...props} />
))
