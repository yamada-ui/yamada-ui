import { forwardRef } from "@yamada-ui/core"
import { Book as BookIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Book = forwardRef<BookProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookIcon} {...props} />
))
