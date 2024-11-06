import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { BookDashed as LucideBookDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `BookDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const BookDashedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={LucideBookDashedIcon} {...props} />,
)

/**
 * @deprecated Use `BookDashedIcon` instead.
 */
export const BookDashed = BookDashedIcon
