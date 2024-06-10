import { forwardRef } from "@yamada-ui/core"
import { Satellite as SatelliteIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SatelliteProps = LucideIconProps

/**
 * `Satellite` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Satellite = forwardRef<SatelliteProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SatelliteIcon} {...props} />
))
