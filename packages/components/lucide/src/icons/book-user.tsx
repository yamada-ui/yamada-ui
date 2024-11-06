import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookUser as LucideBookUserIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookUserIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookUserIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookUserIcon} {...props} />
))

/**
 * @deprecated Use `BookUserIcon` instead.
 */
export const BookUser = BookUserIcon
