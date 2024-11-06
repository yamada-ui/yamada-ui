import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookmarkPlus as LucideBookmarkPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookmarkPlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkPlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBookmarkPlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BookmarkPlusIcon` instead.
 */
export const BookmarkPlus = BookmarkPlusIcon
