import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { MoveUp as MoveUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `MoveUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const MoveUp = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={MoveUpIcon} {...props} />
))
