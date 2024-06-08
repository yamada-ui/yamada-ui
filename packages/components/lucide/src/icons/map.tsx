import { forwardRef } from "@yamada-ui/core"
import { Map as MapIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MapProps = LucideIconProps

/**
 * `Map` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Map = forwardRef<MapProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MapIcon} {...props} />
))
