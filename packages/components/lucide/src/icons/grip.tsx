import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { Grip as LucideGripIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GripIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GripIcon = forwardRef<LucideIconProps, "svg">((props, ref) => (
  <LucideIcon ref={ref} as={LucideGripIcon} {...props} />
))

/**
 * @deprecated Use `GripIcon` instead.
 */
export const Grip = GripIcon
