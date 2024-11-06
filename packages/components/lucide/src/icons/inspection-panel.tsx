import type { LucideIconProps } from "../lucide-icon"
import { forwardRef } from "@yamada-ui/core"
import { InspectionPanel as LucideInspectionPanelIcon } from "lucide-react"
import { LucideIcon } from "../lucide-icon"

/**
 * `InspectionPanelIcon` is [Lucide](https://lucide.dev) SVG icon component.
 *
 * @see Docs https://yamada-ui.com/components/media-and-icons/lucide
 */
export const InspectionPanelIcon = forwardRef<LucideIconProps, "svg">(
  (props, ref) => (
    <LucideIcon ref={ref} as={LucideInspectionPanelIcon} {...props} />
  ),
)

/**
 * @deprecated Use `InspectionPanelIcon` instead.
 */
export const InspectionPanel = InspectionPanelIcon
