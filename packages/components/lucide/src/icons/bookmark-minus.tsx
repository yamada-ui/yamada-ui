import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookmarkMinus as LucideBookmarkMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookmarkMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBookmarkMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BookmarkMinusIcon` instead.
 */
export const BookmarkMinus = BookmarkMinusIcon
