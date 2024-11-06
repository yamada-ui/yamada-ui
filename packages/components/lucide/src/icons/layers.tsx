import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Layers as LucideLayersIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LayersIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LayersIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLayersIcon} {...props} />
))

/**
 * @deprecated Use `LayersIcon` instead.
 */
export const Layers = LayersIcon
