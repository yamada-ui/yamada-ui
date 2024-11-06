import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveVertical as LucideMoveVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMoveVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MoveVerticalIcon` instead.
 */
export const MoveVertical = MoveVerticalIcon
