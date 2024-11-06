import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageSquarePlus as LucideMessageSquarePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageSquarePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquarePlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageSquarePlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageSquarePlusIcon` instead.
 */
export const MessageSquarePlus = MessageSquarePlusIcon
