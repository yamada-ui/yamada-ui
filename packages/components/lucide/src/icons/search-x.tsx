import { forwardRef } from "@yamada-ui/core"
import { SearchX as SearchXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SearchXProps = LucideIconProps

/**
 * `SearchX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchX = forwardRef<SearchXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SearchXIcon} {...props} />
))
