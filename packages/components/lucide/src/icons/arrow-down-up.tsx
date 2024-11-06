import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowDownUp as LucideArrowDownUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowDownUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownUpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowDownUpIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowDownUpIcon` instead.
 */
export const ArrowDownUp = ArrowDownUpIcon
