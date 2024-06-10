import { forwardRef } from "@yamada-ui/core"
import { MessageCirclePlus as MessageCirclePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageCirclePlusProps = LucideIconProps

/**
 * `MessageCirclePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageCirclePlus = forwardRef<MessageCirclePlusProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageCirclePlusIcon} {...props} />
  ),
)
