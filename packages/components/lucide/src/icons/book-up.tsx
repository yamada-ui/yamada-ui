import { forwardRef } from "@yamada-ui/core"
import { BookUp as BookUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookUpProps = LucideIconProps

/**
 * `BookUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookUp = forwardRef<BookUpProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookUpIcon} {...props} />
))
