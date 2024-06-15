import { forwardRef } from "@yamada-ui/core"
import { Turtle as TurtleIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type TurtleProps = LucideIconProps

/**
 * `Turtle` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Turtle = forwardRef<TurtleProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={TurtleIcon} {...props} />
))
