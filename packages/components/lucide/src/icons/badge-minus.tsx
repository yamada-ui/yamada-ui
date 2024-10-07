import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BadgeMinus as BadgeMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BadgeMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BadgeMinus = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BadgeMinusIcon} {...props} />
))
