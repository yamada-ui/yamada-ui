import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ruler as LucideRulerIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RulerIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RulerIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRulerIcon} {...props} />
))

/**
 * @deprecated Use `RulerIcon` instead.
 */
export const Ruler = RulerIcon
