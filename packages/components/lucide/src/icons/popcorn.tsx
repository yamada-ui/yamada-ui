import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Popcorn as LucidePopcornIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PopcornIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PopcornIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucidePopcornIcon} {...props} />
))

/**
 * @deprecated Use `PopcornIcon` instead.
 */
export const Popcorn = PopcornIcon
