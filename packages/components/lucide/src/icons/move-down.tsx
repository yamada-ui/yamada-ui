import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveDown as LucideMoveDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveDownIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMoveDownIcon} {...props} />
))

/**
 * @deprecated Use `MoveDownIcon` instead.
 */
export const MoveDown = MoveDownIcon
