import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Group as LucideGroupIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GroupIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GroupIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGroupIcon} {...props} />
))

/**
 * @deprecated Use `GroupIcon` instead.
 */
export const Group = GroupIcon
