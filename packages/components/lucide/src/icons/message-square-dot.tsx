import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageSquareDot as LucideMessageSquareDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageSquareDotIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDotIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageSquareDotIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageSquareDotIcon` instead.
 */
export const MessageSquareDot = MessageSquareDotIcon
