import { forwardRef } from "@yamada-ui/core"
import { BookText as BookTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookTextProps = LucideIconProps

/**
 * `BookText` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookText = forwardRef<BookTextProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookTextIcon} {...props} />
))
