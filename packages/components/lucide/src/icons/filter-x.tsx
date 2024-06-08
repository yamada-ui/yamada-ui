import { forwardRef } from "@yamada-ui/core"
import { FilterX as FilterXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FilterXProps = LucideIconProps

/**
 * `FilterX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FilterX = forwardRef<FilterXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FilterXIcon} {...props} />
))
