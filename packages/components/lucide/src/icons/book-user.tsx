import { forwardRef } from "@yamada-ui/core"
import { BookUser as BookUserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookUserProps = LucideIconProps

/**
 * `BookUser` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookUser = forwardRef<BookUserProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookUserIcon} {...props} />
))
