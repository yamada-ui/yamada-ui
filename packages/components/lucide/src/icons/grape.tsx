import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Grape as LucideGrapeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GrapeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GrapeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGrapeIcon} {...props} />
))

/**
 * @deprecated Use `GrapeIcon` instead.
 */
export const Grape = GrapeIcon
