import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Airplay as LucideAirplayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AirplayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AirplayIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAirplayIcon} {...props} />
))

/**
 * @deprecated Use `AirplayIcon` instead.
 */
export const Airplay = AirplayIcon
