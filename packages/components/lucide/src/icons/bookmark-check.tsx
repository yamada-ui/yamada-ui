import { forwardRef } from "@yamada-ui/core"
import { BookmarkCheck as BookmarkCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookmarkCheckProps = LucideIconProps

/**
 * `BookmarkCheck` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkCheck = forwardRef<BookmarkCheckProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BookmarkCheckIcon} {...props} />,
)
