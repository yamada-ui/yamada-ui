import { forwardRef } from "@yamada-ui/core"
import { MessageSquarePlus as MessageSquarePlusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type MessageSquarePlusProps = LucideIconProps

/**
 * `MessageSquarePlus` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MessageSquarePlus = forwardRef<MessageSquarePlusProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={MessageSquarePlusIcon} {...props} />
  ),
)
