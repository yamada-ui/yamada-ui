import { forwardRef } from "@yamada-ui/core"
import { BookKey as BookKeyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookKeyProps = LucideIconProps

/**
 * `BookKey` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookKey = forwardRef<BookKeyProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookKeyIcon} {...props} />
))
