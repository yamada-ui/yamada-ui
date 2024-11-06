import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Ribbon as LucideRibbonIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `RibbonIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const RibbonIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideRibbonIcon} {...props} />
))

/**
 * @deprecated Use `RibbonIcon` instead.
 */
export const Ribbon = RibbonIcon
