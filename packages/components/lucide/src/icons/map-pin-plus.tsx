import { forwardRef } from "@yamada-ui/core"
import { MapPinPlus as MapPinPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapPinPlusProps = LucideIconProps

/**
 * `MapPinPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinPlus = forwardRef<MapPinPlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MapPinPlusIcon} {...props} />
))
