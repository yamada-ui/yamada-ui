import { forwardRef } from "@yamada-ui/core"
import { SearchSlash as SearchSlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type SearchSlashProps = LucideIconProps

/**
 * `SearchSlash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchSlash = forwardRef<SearchSlashProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={SearchSlashIcon} {...props} />
))
