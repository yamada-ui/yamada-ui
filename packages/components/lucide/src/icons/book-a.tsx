import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookA as LucideBookAIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookAIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookAIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookAIcon} {...props} />
))

/**
 * @deprecated Use `BookAIcon` instead.
 */
export const BookA = BookAIcon
