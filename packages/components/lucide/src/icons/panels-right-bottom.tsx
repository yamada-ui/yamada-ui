import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelsRightBottom as LucidePanelsRightBottomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelsRightBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsRightBottomIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelsRightBottomIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelsRightBottomIcon` instead.
 */
export const PanelsRightBottom = PanelsRightBottomIcon
