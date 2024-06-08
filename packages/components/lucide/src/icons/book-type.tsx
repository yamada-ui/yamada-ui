import { forwardRef } from "@yamada-ui/core"
import { BookType as BookTypeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookTypeProps = LucideIconProps

/**
 * `BookType` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookType = forwardRef<BookTypeProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookTypeIcon} {...props} />
))
