import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { VolumeX as LucideVolumeXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VolumeXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolumeXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVolumeXIcon} {...props} />
))

/**
 * @deprecated Use `VolumeXIcon` instead.
 */
export const VolumeX = VolumeXIcon
