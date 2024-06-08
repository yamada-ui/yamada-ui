import { forwardRef } from "@yamada-ui/core"
import { BookmarkMinus as BookmarkMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookmarkMinusProps = LucideIconProps

/**
 * `BookmarkMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkMinus = forwardRef<BookmarkMinusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BookmarkMinusIcon} {...props} />,
)
