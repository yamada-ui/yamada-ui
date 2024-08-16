import { forwardRef } from "@yamada-ui/core"
import { MapPinX as MapPinXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapPinXProps = LucideIconProps

/**
 * `MapPinX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinX = forwardRef<MapPinXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MapPinXIcon} {...props} />
))
