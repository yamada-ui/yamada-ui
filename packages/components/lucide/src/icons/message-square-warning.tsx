import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageSquareWarning as LucideMessageSquareWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageSquareWarningIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareWarningIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageSquareWarningIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageSquareWarningIcon` instead.
 */
export const MessageSquareWarning = MessageSquareWarningIcon
