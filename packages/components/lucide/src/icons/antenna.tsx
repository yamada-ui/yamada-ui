import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Antenna as LucideAntennaIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `AntennaIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const AntennaIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideAntennaIcon} {...props} />
))

/**
 * @deprecated Use `AntennaIcon` instead.
 */
export const Antenna = AntennaIcon
