import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowDownRight as ArrowDownRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowDownRight` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownRight = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowDownRightIcon} {...props} />,
)
