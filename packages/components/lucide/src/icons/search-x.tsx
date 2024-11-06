import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SearchX as LucideSearchXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SearchXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideSearchXIcon} {...props} />
))

/**
 * @deprecated Use `SearchXIcon` instead.
 */
export const SearchX = SearchXIcon
