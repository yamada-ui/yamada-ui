import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageCircleDashed as LucideMessageCircleDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageCircleDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleDashedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageCircleDashedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageCircleDashedIcon` instead.
 */
export const MessageCircleDashed = MessageCircleDashedIcon
