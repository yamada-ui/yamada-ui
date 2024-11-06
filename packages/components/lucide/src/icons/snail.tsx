import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Snail as LucideSnailIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SnailIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SnailIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSnailIcon} {...props} />
))

/**
 * @deprecated Use `SnailIcon` instead.
 */
export const Snail = SnailIcon
