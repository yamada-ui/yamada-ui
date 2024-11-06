import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveUp as LucideMoveUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUpIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMoveUpIcon} {...props} />
))

/**
 * @deprecated Use `MoveUpIcon` instead.
 */
export const MoveUp = MoveUpIcon
