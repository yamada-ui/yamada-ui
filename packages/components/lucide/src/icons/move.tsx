import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Move as LucideMoveIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMoveIcon} {...props} />
))

/**
 * @deprecated Use `MoveIcon` instead.
 */
export const Move = MoveIcon
