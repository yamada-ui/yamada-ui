import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveHorizontal as LucideMoveHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMoveHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MoveHorizontalIcon` instead.
 */
export const MoveHorizontal = MoveHorizontalIcon
