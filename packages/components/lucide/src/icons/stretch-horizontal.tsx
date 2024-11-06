import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { StretchHorizontal as LucideStretchHorizontalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `StretchHorizontalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const StretchHorizontalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideStretchHorizontalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `StretchHorizontalIcon` instead.
 */
export const StretchHorizontal = StretchHorizontalIcon
