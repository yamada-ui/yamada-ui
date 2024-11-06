import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelBottomDashed as LucidePanelBottomDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelBottomDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelBottomDashedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelBottomDashedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelBottomDashedIcon` instead.
 */
export const PanelBottomDashed = PanelBottomDashedIcon
