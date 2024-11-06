import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookDown as LucideBookDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookDownIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookDownIcon} {...props} />
))

/**
 * @deprecated Use `BookDownIcon` instead.
 */
export const BookDown = BookDownIcon
