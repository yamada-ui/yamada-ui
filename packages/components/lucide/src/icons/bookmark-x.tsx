import { forwardRef } from "@yamada-ui/core"
import { BookmarkX as BookmarkXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookmarkXProps = LucideIconProps

/**
 * `BookmarkX` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkX = forwardRef<BookmarkXProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookmarkXIcon} {...props} />
))
