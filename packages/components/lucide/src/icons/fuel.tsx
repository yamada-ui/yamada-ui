import { forwardRef } from "@yamada-ui/core"
import { Fuel as FuelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FuelProps = LucideIconProps

/**
 * `Fuel` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Fuel = forwardRef<FuelProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FuelIcon} {...props} />
))
