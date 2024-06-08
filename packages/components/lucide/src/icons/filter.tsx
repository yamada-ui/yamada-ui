import { forwardRef } from "@yamada-ui/core"
import { Filter as FilterIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type FilterProps = LucideIconProps

/**
 * `Filter` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Filter = forwardRef<FilterProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={FilterIcon} {...props} />
))
