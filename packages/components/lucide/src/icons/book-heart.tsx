import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookHeart as LucideBookHeartIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookHeartIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookHeartIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBookHeartIcon} {...props} />,
)

/**
 * @deprecated Use `BookHeartIcon` instead.
 */
export const BookHeart = BookHeartIcon
