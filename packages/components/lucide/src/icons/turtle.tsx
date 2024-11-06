import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Turtle as LucideTurtleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TurtleIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TurtleIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTurtleIcon} {...props} />
))

/**
 * @deprecated Use `TurtleIcon` instead.
 */
export const Turtle = TurtleIcon
