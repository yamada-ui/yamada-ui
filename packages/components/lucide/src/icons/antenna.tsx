import { forwardRef } from "@yamada-ui/core"
import { Antenna as AntennaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type AntennaProps = LucideIconProps

/**
 * `Antenna` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Antenna = forwardRef<AntennaProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AntennaIcon} {...props} />
))
