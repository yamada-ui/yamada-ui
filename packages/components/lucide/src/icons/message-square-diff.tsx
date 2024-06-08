import { forwardRef } from "@yamada-ui/core"
import { MessageSquareDiff as MessageSquareDiffIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareDiffProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDiff = forwardRef<MessageSquareDiffProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareDiffIcon} {...props} />
  ),
)
