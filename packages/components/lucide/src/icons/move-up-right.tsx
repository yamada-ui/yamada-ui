import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveUpRight as MoveUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveUpRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUpRight = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoveUpRightIcon} {...props} />
))
