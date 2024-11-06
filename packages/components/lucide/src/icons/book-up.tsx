import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookUp as LucideBookUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookUpIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookUpIcon} {...props} />
))

/**
 * @deprecated Use `BookUpIcon` instead.
 */
export const BookUp = BookUpIcon
