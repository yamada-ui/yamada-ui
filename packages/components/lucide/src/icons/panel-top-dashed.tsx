import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelTopDashed as LucidePanelTopDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelTopDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelTopDashedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelTopDashedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelTopDashedIcon` instead.
 */
export const PanelTopDashed = PanelTopDashedIcon
