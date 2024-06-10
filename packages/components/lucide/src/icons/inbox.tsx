import { forwardRef } from "@yamada-ui/core"
import { Inbox as InboxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type InboxProps = LucideIconProps

/**
 * `Inbox` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Inbox = forwardRef<InboxProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={InboxIcon} {...props} />
))
