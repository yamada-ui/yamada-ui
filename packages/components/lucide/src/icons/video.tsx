import { forwardRef } from "@yamada-ui/core"
import { Video as VideoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type VideoProps = LucideIconProps

/**
 * `Video` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Video = forwardRef<VideoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={VideoIcon} {...props} />
))
