import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FilterX as LucideFilterXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FilterXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilterXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideFilterXIcon} {...props} />
))

/**
 * @deprecated Use `FilterXIcon` instead.
 */
export const FilterX = FilterXIcon
