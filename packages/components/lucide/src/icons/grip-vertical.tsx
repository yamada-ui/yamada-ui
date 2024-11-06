import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GripVertical as LucideGripVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GripVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GripVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideGripVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `GripVerticalIcon` instead.
 */
export const GripVertical = GripVerticalIcon
