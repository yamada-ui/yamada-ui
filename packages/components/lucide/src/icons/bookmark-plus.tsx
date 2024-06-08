import { forwardRef } from "@yamada-ui/core"
import { BookmarkPlus as BookmarkPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookmarkPlusProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookmarkPlus = forwardRef<BookmarkPlusProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={BookmarkPlusIcon} {...props} />,
)
