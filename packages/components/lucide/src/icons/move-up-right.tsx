import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveUpRight as LucideMoveUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUpRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMoveUpRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MoveUpRightIcon` instead.
 */
export const MoveUpRight = MoveUpRightIcon
