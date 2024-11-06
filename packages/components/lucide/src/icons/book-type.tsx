import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookType as LucideBookTypeIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookTypeIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookTypeIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookTypeIcon} {...props} />
))

/**
 * @deprecated Use `BookTypeIcon` instead.
 */
export const BookType = BookTypeIcon
