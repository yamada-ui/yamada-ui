import { forwardRef } from "@yamada-ui/core"
import { Bookmark as BookmarkIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookmarkProps = LucideIconProps

/**
 * `Bookmark` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Bookmark = forwardRef<BookmarkProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookmarkIcon} {...props} />
))
