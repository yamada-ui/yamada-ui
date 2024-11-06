import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessagesSquare as LucideMessagesSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessagesSquareIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessagesSquareIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessagesSquareIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessagesSquareIcon` instead.
 */
export const MessagesSquare = MessagesSquareIcon
