import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookOpenText as LucideBookOpenTextIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookOpenTextIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookOpenTextIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideBookOpenTextIcon} {...props} />
  ),
)

/**
 * @deprecated Use `BookOpenTextIcon` instead.
 */
export const BookOpenText = BookOpenTextIcon
