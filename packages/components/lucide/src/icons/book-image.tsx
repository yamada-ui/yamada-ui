import { forwardRef } from "@yamada-ui/core"
import { BookImage as BookImageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookImageProps = LucideIconProps

/**
 * `BookImage` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookImage = forwardRef<BookImageProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookImageIcon} {...props} />
))
