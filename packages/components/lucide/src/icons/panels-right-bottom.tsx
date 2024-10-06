import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelsRightBottom as PanelsRightBottomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelsRightBottom` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsRightBottom = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={PanelsRightBottomIcon} {...props} />
  ),
)
