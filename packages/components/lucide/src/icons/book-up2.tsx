import { forwardRef } from "@yamada-ui/core"
import { BookUp2 as BookUp2Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookUp2Props = LucideIconProps

/**
 * `BookUp2` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookUp2 = forwardRef<BookUp2Props, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookUp2Icon} {...props} />
))
