import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerDownLeft as LucideCornerDownLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerDownLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerDownLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCornerDownLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CornerDownLeftIcon` instead.
 */
export const CornerDownLeft = CornerDownLeftIcon
