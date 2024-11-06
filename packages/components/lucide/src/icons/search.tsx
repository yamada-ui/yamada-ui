import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Search as LucideSearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SearchIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSearchIcon} {...props} />
))

/**
 * @deprecated Use `SearchIcon` instead.
 */
export const Search = SearchIcon
