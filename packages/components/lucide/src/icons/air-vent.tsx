import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { AirVent as LucideAirVentIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AirVentIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AirVentIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAirVentIcon} {...props} />
))

/**
 * @deprecated Use `AirVentIcon` instead.
 */
export const AirVent = AirVentIcon
