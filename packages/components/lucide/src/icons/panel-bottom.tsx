import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelBottom as LucidePanelBottomIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelBottomIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelBottomIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelBottomIcon` instead.
 */
export const PanelBottom = PanelBottomIcon
