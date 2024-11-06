import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageCircleMore as LucideMessageCircleMoreIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageCircleMoreIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleMoreIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageCircleMoreIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageCircleMoreIcon` instead.
 */
export const MessageCircleMore = MessageCircleMoreIcon
