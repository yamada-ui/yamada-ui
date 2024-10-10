import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Inbox as InboxIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Inbox` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Inbox = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={InboxIcon} {...props} />
))
