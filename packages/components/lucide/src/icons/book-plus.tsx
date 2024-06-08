import { forwardRef } from "@yamada-ui/core"
import { BookPlus as BookPlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookPlusProps = LucideIconProps

/**
 * `BookPlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookPlus = forwardRef<BookPlusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookPlusIcon} {...props} />
))
