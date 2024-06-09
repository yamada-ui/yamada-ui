import { forwardRef } from "@yamada-ui/core"
import { Layers as LayersIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type LayersProps = LucideIconProps

/**
 * `Layers` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Layers = forwardRef<LayersProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LayersIcon} {...props} />
))
