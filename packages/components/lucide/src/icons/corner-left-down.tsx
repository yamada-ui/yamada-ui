import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerLeftDown as LucideCornerLeftDownIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerLeftDownIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerLeftDownIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCornerLeftDownIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CornerLeftDownIcon` instead.
 */
export const CornerLeftDown = CornerLeftDownIcon
