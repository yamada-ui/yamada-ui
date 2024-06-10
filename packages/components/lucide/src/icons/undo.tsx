import { forwardRef } from "@yamada-ui/core"
import { Undo as UndoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type UndoProps = LucideIconProps

/**
 * `Undo` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Undo = forwardRef<UndoProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={UndoIcon} {...props} />
))
