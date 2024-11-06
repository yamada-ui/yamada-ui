import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { VolumeOff as LucideVolumeOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VolumeOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VolumeOffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideVolumeOffIcon} {...props} />,
)

/**
 * @deprecated Use `VolumeOffIcon` instead.
 */
export const VolumeOff = VolumeOffIcon
