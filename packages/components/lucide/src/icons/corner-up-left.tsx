import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { CornerUpLeft as LucideCornerUpLeftIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `CornerUpLeftIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const CornerUpLeftIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideCornerUpLeftIcon} {...props} />
  ),
)

/**
 * @deprecated Use `CornerUpLeftIcon` instead.
 */
export const CornerUpLeft = CornerUpLeftIcon
