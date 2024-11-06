import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Vegan as LucideVeganIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `VeganIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const VeganIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideVeganIcon} {...props} />
))

/**
 * @deprecated Use `VeganIcon` instead.
 */
export const Vegan = VeganIcon
