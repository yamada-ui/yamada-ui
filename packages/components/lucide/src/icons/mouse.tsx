import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Mouse as LucideMouseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MouseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MouseIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideMouseIcon} {...props} />
))

/**
 * @deprecated Use `MouseIcon` instead.
 */
export const Mouse = MouseIcon
