import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Haze as LucideHazeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HazeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HazeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHazeIcon} {...props} />
))

/**
 * @deprecated Use `HazeIcon` instead.
 */
export const Haze = HazeIcon
