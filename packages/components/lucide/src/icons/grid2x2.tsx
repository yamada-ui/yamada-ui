import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Grid2x2 as LucideGrid2x2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Grid2x2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGrid2x2Icon} {...props} />
))

/**
 * @deprecated Use `Grid2x2Icon` instead.
 */
export const Grid2x2 = Grid2x2Icon
