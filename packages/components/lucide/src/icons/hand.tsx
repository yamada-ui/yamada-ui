import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Hand as LucideHandIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `HandIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const HandIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideHandIcon} {...props} />
))

/**
 * @deprecated Use `HandIcon` instead.
 */
export const Hand = HandIcon
