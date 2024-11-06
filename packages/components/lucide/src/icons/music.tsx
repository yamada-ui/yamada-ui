import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Music as LucideMusicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MusicIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MusicIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMusicIcon} {...props} />
))

/**
 * @deprecated Use `MusicIcon` instead.
 */
export const Music = MusicIcon
