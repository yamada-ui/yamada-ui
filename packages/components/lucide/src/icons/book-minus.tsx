import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookMinus as LucideBookMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBookMinusIcon} {...props} />,
)

/**
 * @deprecated Use `BookMinusIcon` instead.
 */
export const BookMinus = BookMinusIcon
