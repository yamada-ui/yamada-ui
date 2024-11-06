import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookCheck as LucideBookCheckIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookCheckIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookCheckIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBookCheckIcon} {...props} />,
)

/**
 * @deprecated Use `BookCheckIcon` instead.
 */
export const BookCheck = BookCheckIcon
