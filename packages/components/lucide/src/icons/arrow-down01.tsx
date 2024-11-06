import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowDown01 as LucideArrowDown01Icon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowDown01Icon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDown01Icon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowDown01Icon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowDown01Icon` instead.
 */
export const ArrowDown01 = ArrowDown01Icon
