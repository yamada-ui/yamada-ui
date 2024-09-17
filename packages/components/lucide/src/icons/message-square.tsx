import { forwardRef } from "@yamada-ui/core"
import { MessageSquare as MessageSquareIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `MessageSquare` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquare = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={MessageSquareIcon} {...props} />,
)
