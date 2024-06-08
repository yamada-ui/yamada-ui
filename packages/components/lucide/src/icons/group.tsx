import { forwardRef } from "@yamada-ui/core"
import { Group as GroupIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GroupProps = LucideIconProps

/**
 * `Group` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Group = forwardRef<GroupProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GroupIcon} {...props} />
))
