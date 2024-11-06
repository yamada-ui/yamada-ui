import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveRight as LucideMoveRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMoveRightIcon} {...props} />,
)

/**
 * @deprecated Use `MoveRightIcon` instead.
 */
export const MoveRight = MoveRightIcon
