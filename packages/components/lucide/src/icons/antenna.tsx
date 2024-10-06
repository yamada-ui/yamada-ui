import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Antenna as AntennaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Antenna` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Antenna = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={AntennaIcon} {...props} />
))
