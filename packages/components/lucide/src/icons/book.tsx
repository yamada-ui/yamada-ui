import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Book as LucideBookIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookIcon} {...props} />
))

/**
 * @deprecated Use `BookIcon` instead.
 */
export const Book = BookIcon
