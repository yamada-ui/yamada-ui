import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerLeftUp as LucideCornerLeftUpIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerLeftUpIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerLeftUpIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCornerLeftUpIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CornerLeftUpIcon` instead.
 */
export const CornerLeftUp = CornerLeftUpIcon
