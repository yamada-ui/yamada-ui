import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowDown10 as LucideArrowDown10Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowDown10Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDown10Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowDown10Icon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowDown10Icon` instead.
 */
export const ArrowDown10 = ArrowDown10Icon
