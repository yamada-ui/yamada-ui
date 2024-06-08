import { forwardRef } from "@yamada-ui/core"
import { PanelsRightBottom as PanelsRightBottomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"
import type { LucideIconProps } from "../lucide-icon"

export type PanelsRightBottomProps = LucideIconProps

/**
 * `PanelsRightBottom` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelsRightBottom = forwardRef<PanelsRightBottomProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={PanelsRightBottomIcon} {...props} />
  ),
)
