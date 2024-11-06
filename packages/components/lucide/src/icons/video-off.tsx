import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { VideoOff as LucideVideoOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VideoOffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VideoOffIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVideoOffIcon} {...props} />
))

/**
 * @deprecated Use `VideoOffIcon` instead.
 */
export const VideoOff = VideoOffIcon
