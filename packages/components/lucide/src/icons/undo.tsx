import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Undo as LucideUndoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `UndoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const UndoIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUndoIcon} {...props} />
))

/**
 * @deprecated Use `UndoIcon` instead.
 */
export const Undo = UndoIcon
