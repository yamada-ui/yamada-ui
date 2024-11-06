import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { PanelLeftOpen as LucidePanelLeftOpenIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `PanelLeftOpenIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const PanelLeftOpenIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucidePanelLeftOpenIcon} {...props} />
  ),
)

/**
 * @deprecated Use `PanelLeftOpenIcon` instead.
 */
export const PanelLeftOpen = PanelLeftOpenIcon
