import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelBottomOpen as LucidePanelBottomOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelBottomOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomOpenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelBottomOpenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelBottomOpenIcon` instead.
 */
export const PanelBottomOpen = PanelBottomOpenIcon
