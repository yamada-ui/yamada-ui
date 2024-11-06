import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookMarked as LucideBookMarkedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookMarkedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookMarkedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBookMarkedIcon} {...props} />,
)

/**
 * @deprecated Use `BookMarkedIcon` instead.
 */
export const BookMarked = BookMarkedIcon
