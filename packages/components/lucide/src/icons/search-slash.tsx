import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SearchSlash as LucideSearchSlashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SearchSlashIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchSlashIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSearchSlashIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SearchSlashIcon` instead.
 */
export const SearchSlash = SearchSlashIcon
