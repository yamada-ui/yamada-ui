import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { ArrowDownLeft as LucideArrowDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `ArrowDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const ArrowDownLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideArrowDownLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `ArrowDownLeftIcon` instead.
 */
export const ArrowDownLeft = ArrowDownLeftIcon
