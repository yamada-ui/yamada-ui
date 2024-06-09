import { forwardRef } from "@yamada-ui/core"
import { BookLock as BookLockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type BookLockProps = LucideIconProps

/**
 * `BookLock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookLock = forwardRef<BookLockProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={BookLockIcon} {...props} />
))
