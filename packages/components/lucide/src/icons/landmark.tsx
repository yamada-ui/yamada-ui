import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Landmark as LucideLandmarkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `LandmarkIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const LandmarkIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideLandmarkIcon} {...props} />
))

/**
 * @deprecated Use `LandmarkIcon` instead.
 */
export const Landmark = LandmarkIcon
