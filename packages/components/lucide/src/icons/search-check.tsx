import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SearchCheck as LucideSearchCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SearchCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideSearchCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `SearchCheckIcon` instead.
 */
export const SearchCheck = SearchCheckIcon
