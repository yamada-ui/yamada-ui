import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookCopy as LucideBookCopyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookCopyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookCopyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookCopyIcon} {...props} />
))

/**
 * @deprecated Use `BookCopyIcon` instead.
 */
export const BookCopy = BookCopyIcon
