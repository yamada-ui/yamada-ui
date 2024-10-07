import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { GripHorizontal as GripHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `GripHorizontal` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const GripHorizontal = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={GripHorizontalIcon} {...props} />,
)
