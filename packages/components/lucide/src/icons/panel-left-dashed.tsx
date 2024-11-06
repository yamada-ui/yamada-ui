import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelLeftDashed as LucidePanelLeftDashedIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelLeftDashedIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftDashedIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelLeftDashedIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelLeftDashedIcon` instead.
 */
export const PanelLeftDashed = PanelLeftDashedIcon
