import { forwardRef } from "@yamada-ui/core"
import { ArrowBigLeftDash as ArrowBigLeftDashIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

/**
 * `ArrowBigLeftDash` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowBigLeftDash = forwardRef<LucideIconProps, "svg">(
  (props, ref) => <LucideIcon ref={ref} as={ArrowBigLeftDashIcon} {...props} />,
)
