import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MessageCirclePlus as LucideMessageCirclePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MessageCirclePlusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCirclePlusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideMessageCirclePlusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `MessageCirclePlusIcon` instead.
 */
export const MessageCirclePlus = MessageCirclePlusIcon
