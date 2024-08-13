import { forwardRef } from "@yamada-ui/core"
import { MapPinHouse as MapPinHouseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapPinHouseProps = LucideIconProps

/**
 * `MapPinHouse` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinHouse = forwardRef<MapPinHouseProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MapPinHouseIcon} {...props} />
))
