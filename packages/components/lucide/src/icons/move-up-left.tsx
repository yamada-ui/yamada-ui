import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveUpLeft as LucideMoveUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUpLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideMoveUpLeftIcon} {...props} />,
)

/**
 * @deprecated Use `MoveUpLeftIcon` instead.
 */
export const MoveUpLeft = MoveUpLeftIcon
