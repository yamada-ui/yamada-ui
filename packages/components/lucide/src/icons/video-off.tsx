import { forwardRef } from "@yamada-ui/core"
import { VideoOff as VideoOffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VideoOffProps = LucideIconProps

/**
 * `VideoOff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VideoOff = forwardRef<VideoOffProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VideoOffIcon} {...props} />
))
