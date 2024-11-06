import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelBottomClose as LucidePanelBottomCloseIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelBottomCloseIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomCloseIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelBottomCloseIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelBottomCloseIcon` instead.
 */
export const PanelBottomClose = PanelBottomCloseIcon
