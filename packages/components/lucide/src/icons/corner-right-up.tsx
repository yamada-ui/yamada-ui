import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerRightUp as CornerRightUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerRightUp` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerRightUp = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={CornerRightUpIcon} {...props} />,
)
