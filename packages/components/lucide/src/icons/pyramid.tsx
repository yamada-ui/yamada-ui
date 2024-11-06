import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Pyramid as LucidePyramidIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PyramidIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PyramidIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePyramidIcon} {...props} />
))

/**
 * @deprecated Use `PyramidIcon` instead.
 */
export const Pyramid = PyramidIcon
