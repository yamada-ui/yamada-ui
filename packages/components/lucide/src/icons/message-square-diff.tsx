import { forwardRef } from "@yamada-ui/core"
import { MessageSquareDiff as MessageSquareDiffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareDiffProps = LucideIconProps

/**
 * `MessageSquareDiff` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDiff = forwardRef<MessageSquareDiffProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareDiffIcon} {...props} />
  ),
)
