import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { SearchCode as LucideSearchCodeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `SearchCodeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const SearchCodeIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideSearchCodeIcon} {...props} />,
)

/**
 * @deprecated Use `SearchCodeIcon` instead.
 */
export const SearchCode = SearchCodeIcon
