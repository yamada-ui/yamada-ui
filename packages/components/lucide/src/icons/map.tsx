import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Map as LucideMapIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMapIcon} {...props} />
))

/**
 * @deprecated Use `MapIcon` instead.
 */
export const Map = MapIcon
