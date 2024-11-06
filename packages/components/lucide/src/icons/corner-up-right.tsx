import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerUpRight as LucideCornerUpRightIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerUpRightIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerUpRightIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCornerUpRightIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CornerUpRightIcon` instead.
 */
export const CornerUpRight = CornerUpRightIcon
