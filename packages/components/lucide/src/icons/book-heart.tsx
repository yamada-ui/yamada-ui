import { forwardRef } from "@yamada-ui/core"
import { BookHeart as BookHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookHeartProps = LucideIconProps

/**
 * `BookHeart` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookHeart = forwardRef<BookHeartProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookHeartIcon} {...props} />
))
