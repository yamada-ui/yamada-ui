import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Truck as LucideTruckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TruckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TruckIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTruckIcon} {...props} />
))

/**
 * @deprecated Use `TruckIcon` instead.
 */
export const Truck = TruckIcon
