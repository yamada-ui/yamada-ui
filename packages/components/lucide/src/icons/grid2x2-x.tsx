import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Grid2x2X as LucideGrid2x2XIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Grid2x2XIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2XIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGrid2x2XIcon} {...props} />
))

/**
 * @deprecated Use `Grid2x2XIcon` instead.
 */
export const Grid2x2X = Grid2x2XIcon
