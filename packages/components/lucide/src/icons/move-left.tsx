import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveLeft as LucideMoveLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveLeftIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMoveLeftIcon} {...props} />
))

/**
 * @deprecated Use `MoveLeftIcon` instead.
 */
export const MoveLeft = MoveLeftIcon
