import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { FlipVertical as LucideFlipVerticalIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `FlipVerticalIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const FlipVerticalIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideFlipVerticalIcon} {...props} />
  ),
)

/**
 * @deprecated Use `FlipVerticalIcon` instead.
 */
export const FlipVertical = FlipVerticalIcon
