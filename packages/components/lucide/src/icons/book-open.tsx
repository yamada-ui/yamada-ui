import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookOpen as LucideBookOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpenIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookOpenIcon} {...props} />
))

/**
 * @deprecated Use `BookOpenIcon` instead.
 */
export const BookOpen = BookOpenIcon
