import { forwardRef } from "@yamada-ui/core"
import { Grid2x2X as Grid2x2XIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Grid2x2XProps = LucideIconProps

/**
 * `Grid2x2X` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2X = forwardRef<Grid2x2XProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Grid2x2XIcon} {...props} />
))
