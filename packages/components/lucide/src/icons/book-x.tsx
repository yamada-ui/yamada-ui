import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookX as LucideBookXIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookXIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookXIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookXIcon} {...props} />
))

/**
 * @deprecated Use `BookXIcon` instead.
 */
export const BookX = BookXIcon
