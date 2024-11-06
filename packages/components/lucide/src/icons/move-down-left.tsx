import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveDownLeft as LucideMoveDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDownLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMoveDownLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MoveDownLeftIcon` instead.
 */
export const MoveDownLeft = MoveDownLeftIcon
