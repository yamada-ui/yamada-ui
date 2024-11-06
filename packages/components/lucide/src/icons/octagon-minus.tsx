import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { OctagonMinus as LucideOctagonMinusIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `OctagonMinusIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const OctagonMinusIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideOctagonMinusIcon} {...props} />
  ),
)

/**
 * @deprecated Use `OctagonMinusIcon` instead.
 */
export const OctagonMinus = OctagonMinusIcon
