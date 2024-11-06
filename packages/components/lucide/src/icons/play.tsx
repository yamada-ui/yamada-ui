import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Play as LucidePlayIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PlayIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PlayIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePlayIcon} {...props} />
))

/**
 * @deprecated Use `PlayIcon` instead.
 */
export const Play = PlayIcon
