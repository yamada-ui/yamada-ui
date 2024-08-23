import { forwardRef } from "@yamada-ui/core"
import { MapPinCheck as MapPinCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapPinCheckProps = LucideIconProps

/**
 * `MapPinCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinCheck = forwardRef<MapPinCheckProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MapPinCheckIcon} {...props} />
))
