import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookOpenCheck as LucideBookOpenCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookOpenCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpenCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBookOpenCheckIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BookOpenCheckIcon` instead.
 */
export const BookOpenCheck = BookOpenCheckIcon
