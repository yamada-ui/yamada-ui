import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Undo2 as LucideUndo2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Undo2Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Undo2Icon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideUndo2Icon} {...props} />
))

/**
 * @deprecated Use `Undo2Icon` instead.
 */
export const Undo2 = Undo2Icon
