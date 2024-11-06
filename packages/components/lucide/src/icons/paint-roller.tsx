import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PaintRoller as LucidePaintRollerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PaintRollerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PaintRollerIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePaintRollerIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PaintRollerIcon` instead.
 */
export const PaintRoller = PaintRollerIcon
