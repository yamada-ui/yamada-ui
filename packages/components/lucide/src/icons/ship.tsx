import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ship as LucideShipIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ShipIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ShipIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideShipIcon} {...props} />
))

/**
 * @deprecated Use `ShipIcon` instead.
 */
export const Ship = ShipIcon
