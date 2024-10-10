import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageCircleWarning as MessageCircleWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageCircleWarning` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCircleWarning = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageCircleWarningIcon} {...props} />
  ),
)
