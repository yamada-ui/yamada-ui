import { forwardRef } from "@yamada-ui/core"
import { BookOpen as BookOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookOpenProps = LucideIconProps

/**
 * `BookOpen` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpen = forwardRef<BookOpenProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookOpenIcon} {...props} />
))
