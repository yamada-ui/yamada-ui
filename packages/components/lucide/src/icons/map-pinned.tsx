import { forwardRef } from "@yamada-ui/core"
import { MapPinned as MapPinnedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapPinnedProps = LucideIconProps

/**
 * `MapPinned` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MapPinned = forwardRef<MapPinnedProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MapPinnedIcon} {...props} />
))
