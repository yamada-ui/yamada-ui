import { forwardRef } from "@yamada-ui/core"
import { Music as MusicIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MusicProps = LucideIconProps

/**
 * `Music` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Music = forwardRef<MusicProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MusicIcon} {...props} />
))
