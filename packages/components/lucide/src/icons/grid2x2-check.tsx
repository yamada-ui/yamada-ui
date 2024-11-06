import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Grid2x2Check as LucideGrid2x2CheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Grid2x2CheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Grid2x2CheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGrid2x2CheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `Grid2x2CheckIcon` instead.
 */
export const Grid2x2Check = Grid2x2CheckIcon
