import { forwardRef } from "@yamada-ui/core"
import { Goal as GoalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `Goal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const Goal = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={GoalIcon} {...props} />
))
