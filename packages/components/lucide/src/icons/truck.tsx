import { forwardRef } from "@yamada-ui/core"
import { Truck as TruckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TruckProps = LucideIconProps

/**
 * `Truck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Truck = forwardRef<TruckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TruckIcon} {...props} />
))
