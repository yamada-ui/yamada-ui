import { forwardRef } from "@yamada-ui/core"
import { MessageSquareDot as MessageSquareDotIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquareDotProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareDot = forwardRef<MessageSquareDotProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MessageSquareDotIcon} {...props} />,
)
