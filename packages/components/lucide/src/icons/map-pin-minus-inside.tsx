import { forwardRef } from "@yamada-ui/core"
import { MapPinMinusInside as MapPinMinusInsideIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapPinMinusInsideProps = LucideIconProps

/**
 * `MapPinMinusInside` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinMinusInside = forwardRef<MapPinMinusInsideProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MapPinMinusInsideIcon} {...props} />
  ),
)
