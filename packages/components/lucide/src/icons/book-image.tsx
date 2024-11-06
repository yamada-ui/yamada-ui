import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookImage as LucideBookImageIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookImageIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookImageIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBookImageIcon} {...props} />,
)

/**
 * @deprecated Use `BookImageIcon` instead.
 */
export const BookImage = BookImageIcon
