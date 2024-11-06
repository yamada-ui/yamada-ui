import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Fuel as LucideFuelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FuelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FuelIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFuelIcon} {...props} />
))

/**
 * @deprecated Use `FuelIcon` instead.
 */
export const Fuel = FuelIcon
