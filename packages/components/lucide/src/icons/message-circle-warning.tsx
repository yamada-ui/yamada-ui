import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageCircleWarning as LucideMessageCircleWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageCircleWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleWarningIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageCircleWarningIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageCircleWarningIcon` instead.
 */
export const MessageCircleWarning = MessageCircleWarningIcon
