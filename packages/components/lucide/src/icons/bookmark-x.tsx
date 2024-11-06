import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookmarkX as LucideBookmarkXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookmarkXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkXIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBookmarkXIcon} {...props} />,
)

/**
 * @deprecated Use `BookmarkXIcon` instead.
 */
export const BookmarkX = BookmarkXIcon
