import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelsLeftBottom as LucidePanelsLeftBottomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelsLeftBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsLeftBottomIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelsLeftBottomIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelsLeftBottomIcon` instead.
 */
export const PanelsLeftBottom = PanelsLeftBottomIcon
