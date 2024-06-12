import { forwardRef } from "@yamada-ui/core"
import { BookMinus as BookMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookMinusProps = LucideIconProps

/**
 * `BookMinus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookMinus = forwardRef<BookMinusProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookMinusIcon} {...props} />
))
