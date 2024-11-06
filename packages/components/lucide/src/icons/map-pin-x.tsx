import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MapPinX as LucideMapPinXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MapPinXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMapPinXIcon} {...props} />
))

/**
 * @deprecated Use `MapPinXIcon` instead.
 */
export const MapPinX = MapPinXIcon
