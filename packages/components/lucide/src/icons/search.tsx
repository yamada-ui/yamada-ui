import { forwardRef } from "@yamada-ui/core"
import { Search as SearchIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SearchProps = LucideIconProps

/**
 * `Search` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Search = forwardRef<SearchProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SearchIcon} {...props} />
))
