import { forwardRef } from "@yamada-ui/core"
import { BookDashed as BookDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookDashedProps = LucideIconProps

/**
 * `BookDashed` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookDashed = forwardRef<BookDashedProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookDashedIcon} {...props} />
))
