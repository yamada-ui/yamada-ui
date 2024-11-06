import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageSquareDiff as LucideMessageSquareDiffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageSquareDiffIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDiffIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageSquareDiffIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageSquareDiffIcon` instead.
 */
export const MessageSquareDiff = MessageSquareDiffIcon
