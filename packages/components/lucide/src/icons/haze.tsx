import { forwardRef } from "@yamada-ui/core"
import { Haze as HazeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type HazeProps = LucideIconProps

/**
 * `Haze` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Haze = forwardRef<HazeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={HazeIcon} {...props} />
))
