import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookLock as LucideBookLockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookLockIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookLockIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideBookLockIcon} {...props} />
))

/**
 * @deprecated Use `BookLockIcon` instead.
 */
export const BookLock = BookLockIcon
