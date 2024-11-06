import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Video as LucideVideoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VideoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VideoIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVideoIcon} {...props} />
))

/**
 * @deprecated Use `VideoIcon` instead.
 */
export const Video = VideoIcon
