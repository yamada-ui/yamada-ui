import { forwardRef } from "@yamada-ui/core"
import { Grid2x2 as Grid2x2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type Grid2x2Props = LucideIconProps

/**
 * `Grid2x2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2 = forwardRef<Grid2x2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={Grid2x2Icon} {...props} />
))
