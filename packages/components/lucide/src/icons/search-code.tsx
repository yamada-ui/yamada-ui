import { forwardRef } from "@yamada-ui/core"
import { SearchCode as SearchCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SearchCodeProps = LucideIconProps

/**
 * `SearchCode` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchCode = forwardRef<SearchCodeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SearchCodeIcon} {...props} />
))
