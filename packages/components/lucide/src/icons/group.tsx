import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Group as GroupIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `Group` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Group = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GroupIcon} {...props} />
))
