import { forwardRef } from "@yamada-ui/core"
import { MessageSquareWarning as MessageSquareWarningIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareWarningProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareWarning = forwardRef<
  MessageSquareWarningProps,
  "svg"
>((props, ref) => (
  <LucideIcon ref={ref} as={MessageSquareWarningIcon} {...props} />
))
