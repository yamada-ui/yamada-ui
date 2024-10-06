import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { VolumeX as VolumeXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VolumeX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolumeX = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VolumeXIcon} {...props} />
))
