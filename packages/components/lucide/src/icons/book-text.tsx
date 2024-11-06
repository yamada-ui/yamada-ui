import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookText as LucideBookTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookTextIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookTextIcon} {...props} />
))

/**
 * @deprecated Use `BookTextIcon` instead.
 */
export const BookText = BookTextIcon
