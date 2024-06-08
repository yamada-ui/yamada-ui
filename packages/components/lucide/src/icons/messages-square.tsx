import { forwardRef } from "@yamada-ui/core"
import { MessagesSquare as MessagesSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessagesSquareProps = LucideIconProps

/**


 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessagesSquare = forwardRef<MessagesSquareProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MessagesSquareIcon} {...props} />,
)
