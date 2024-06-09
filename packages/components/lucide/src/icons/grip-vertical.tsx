import { forwardRef } from "@yamada-ui/core"
import { GripVertical as GripVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type GripVerticalProps = LucideIconProps

/**
 * `GripVertical` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GripVertical = forwardRef<GripVerticalProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={GripVerticalIcon} {...props} />,
)
