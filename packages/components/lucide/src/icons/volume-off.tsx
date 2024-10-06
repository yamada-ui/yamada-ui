import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { VolumeOff as VolumeOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VolumeOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolumeOff = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VolumeOffIcon} {...props} />
))
