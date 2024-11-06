import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Tractor as LucideTractorIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `TractorIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const TractorIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideTractorIcon} {...props} />
))

/**
 * @deprecated Use `TractorIcon` instead.
 */
export const Tractor = TractorIcon
