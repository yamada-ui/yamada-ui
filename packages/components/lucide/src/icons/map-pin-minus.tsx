import { forwardRef } from "@yamada-ui/core"
import { MapPinMinus as MapPinMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapPinMinusProps = LucideIconProps

/**
 * `MapPinMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinMinus = forwardRef<MapPinMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MapPinMinusIcon} {...props} />
))
