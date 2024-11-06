import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Grid2x2Plus as LucideGrid2x2PlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Grid2x2PlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2PlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGrid2x2PlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `Grid2x2PlusIcon` instead.
 */
export const Grid2x2Plus = Grid2x2PlusIcon
