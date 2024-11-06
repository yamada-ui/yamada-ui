import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Redo as LucideRedoIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RedoIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RedoIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRedoIcon} {...props} />
))

/**
 * @deprecated Use `RedoIcon` instead.
 */
export const Redo = RedoIcon
