import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookKey as LucideBookKeyIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookKeyIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookKeyIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookKeyIcon} {...props} />
))

/**
 * @deprecated Use `BookKeyIcon` instead.
 */
export const BookKey = BookKeyIcon
