import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookmarkCheck as LucideBookmarkCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookmarkCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBookmarkCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BookmarkCheckIcon` instead.
 */
export const BookmarkCheck = BookmarkCheckIcon
