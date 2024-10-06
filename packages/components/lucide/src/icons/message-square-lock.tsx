import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageSquareLock as MessageSquareLockIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageSquareLock` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquareLock = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquareLockIcon} {...props} />
  ),
)
